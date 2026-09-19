REVOKE ALL ON public.applications FROM anon, authenticated;
REVOKE ALL ON public.application_documents FROM anon, authenticated;
REVOKE ALL ON public.application_audit_log FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.next_business_loan_application_number() FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.applications TO service_role;
GRANT ALL ON public.application_documents TO service_role;
GRANT ALL ON public.application_audit_log TO service_role;
GRANT EXECUTE ON FUNCTION public.next_business_loan_application_number() TO service_role;
