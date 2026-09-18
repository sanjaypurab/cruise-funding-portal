CREATE SEQUENCE public.business_loan_application_seq START 1;

CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_number TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'under_review', 'documents_required', 'processing', 'approved', 'declined', 'withdrawn', 'completed')),
  owner_name TEXT NOT NULL,
  ownership_percentage NUMERIC(5,2) NOT NULL CHECK (ownership_percentage >= 0 AND ownership_percentage <= 100),
  city TEXT,
  address TEXT,
  state TEXT,
  zip_code TEXT,
  mobile TEXT NOT NULL,
  home_phone TEXT,
  date_of_birth DATE,
  uid TEXT,
  gender TEXT,
  company_name TEXT,
  year_established INTEGER CHECK (year_established IS NULL OR year_established BETWEEN 1800 AND 2100),
  business_city TEXT,
  business_address TEXT,
  years_in_business NUMERIC(5,2),
  business_state TEXT,
  fax TEXT,
  business_email TEXT,
  business_zip TEXT,
  business_phone TEXT,
  business_type TEXT,
  website TEXT,
  legal_status TEXT,
  number_of_partners INTEGER CHECK (number_of_partners IS NULL OR number_of_partners >= 2),
  annual_turnover NUMERIC(18,2),
  net_profit NUMERIC(18,2),
  total_assets NUMERIC(18,2),
  total_liabilities NUMERIC(18,2),
  employees INTEGER CHECK (employees IS NULL OR employees >= 0),
  total_annual_sales NUMERIC(18,2),
  inventory_value NUMERIC(18,2),
  corporate_bank_name TEXT,
  existing_business_loans BOOLEAN,
  existing_lender TEXT,
  existing_outstanding_balance NUMERIC(18,2),
  existing_monthly_repayment NUMERIC(18,2),
  existing_loan_count INTEGER CHECK (existing_loan_count IS NULL OR existing_loan_count >= 0),
  existing_line_of_credit BOOLEAN,
  line_of_credit_lender TEXT,
  line_of_credit_limit NUMERIC(18,2),
  line_of_credit_balance NUMERIC(18,2),
  real_estate_owned BOOLEAN,
  property_location TEXT,
  real_estate_value NUMERIC(18,2),
  outstanding_mortgage NUMERIC(18,2),
  approximate_equity NUMERIC(18,2),
  bank_statement_availability TEXT,
  account_type TEXT,
  projected_atps NUMERIC(18,2),
  business_plan_available TEXT,
  requested_financing_amount NUMERIC(18,2) NOT NULL,
  financing_purpose TEXT NOT NULL,
  financing_purpose_other TEXT,
  desired_financing_term TEXT,
  applicant_email TEXT,
  signature_url TEXT,
  signed_at TIMESTAMPTZ,
  signature_user_agent TEXT,
  document_version TEXT,
  data_hash TEXT,
  pdf_url TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  internal_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.applications TO authenticated;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authorized staff can view applications" ON public.applications FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Authorized staff can update applications" ON public.applications FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator')) WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));

CREATE TABLE public.application_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  original_name TEXT NOT NULL,
  storage_path TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL,
  file_size BIGINT NOT NULL CHECK (file_size > 0 AND file_size <= 10485760),
  category TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.application_documents TO authenticated;
GRANT ALL ON public.application_documents TO service_role;
ALTER TABLE public.application_documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authorized staff can view application documents" ON public.application_documents FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));
CREATE POLICY "Authorized staff can manage application documents" ON public.application_documents FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.application_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID NOT NULL REFERENCES public.applications(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  actor_user_id UUID,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.application_audit_log TO authenticated;
GRANT ALL ON public.application_audit_log TO service_role;
ALTER TABLE public.application_audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authorized staff can view application audit logs" ON public.application_audit_log FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'));

CREATE OR REPLACE FUNCTION public.next_business_loan_application_number()
RETURNS TEXT
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 'FIN-' || to_char(current_date, 'YYYY') || '-' || lpad(nextval('public.business_loan_application_seq')::text, 6, '0')
$$;
REVOKE EXECUTE ON FUNCTION public.next_business_loan_application_number() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.next_business_loan_application_number() TO service_role;

CREATE OR REPLACE FUNCTION public.update_application_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
CREATE TRIGGER applications_updated_at BEFORE UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION public.update_application_updated_at();

CREATE POLICY "Authorized staff can manage application files" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'loan-applications' AND (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'moderator'))) WITH CHECK (bucket_id = 'loan-applications' AND public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.validate_application_bank_data()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF coalesce(NEW.payload::text, '') ~* '(password|pin|otp|one[- ]time password|card number|cvv|security code)' THEN
    RAISE EXCEPTION 'Prohibited banking credential data was detected';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER applications_reject_prohibited_data BEFORE INSERT OR UPDATE ON public.applications FOR EACH ROW EXECUTE FUNCTION public.validate_application_bank_data();