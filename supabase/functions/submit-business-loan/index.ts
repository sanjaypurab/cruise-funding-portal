import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const db = createClient(supabaseUrl, serviceKey);
const prohibited = /(password|pin|otp|one[- ]time password|card number|cvv|security code)/i;
const allowedTypes = new Set(["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"]);
const maxFileSize = 10 * 1024 * 1024;

function clean(value: unknown, max = 500) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function money(value: unknown) { const number = Number(String(value ?? "").replace(/[^0-9.]/g, "")); return Number.isFinite(number) ? number : null; }
function jsonResponse(body: unknown, status = 200) { return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } }); }

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return jsonResponse({ error: "Please sign in before submitting." }, 401);
    const { data: { user }, error: authError } = await db.auth.getUser(authHeader.replace("Bearer ", ""));
    if (authError || !user) return jsonResponse({ error: "Your session has expired. Please try again." }, 401);
    const body = await req.json();
    const data = body.data ?? {};
    const payloadText = JSON.stringify(data);
    if (prohibited.test(payloadText)) return jsonResponse({ error: "Please remove banking passwords, PINs, OTPs, card numbers, or security codes." }, 400);
    const ownerName = clean(data.ownerName, 120);
    const mobile = clean(data.mobile, 40);
    const businessEmail = clean(data.businessEmail, 255);
    const requestedAmount = money(data.requestedFinancingAmount);
    const ownership = Number(data.ownershipPercentage);
    if (!ownerName || !mobile || !businessEmail || !requestedAmount || !data.financingPurpose || !data.privacyConsent || ownership < 0 || ownership > 100) return jsonResponse({ error: "Please complete all required fields and confirm the privacy notice." }, 400);
    const { data: numberData, error: numberError } = await db.rpc("next_business_loan_application_number");
    if (numberError) throw numberError;
    const applicationNumber = numberData as string;
    const signatureData = clean(body.signature, 2000000);
    const signaturePath = `${applicationNumber}/signature.png`;
    let signatureUrl: string | null = null;
    if (signatureData.startsWith("data:image/png;base64,")) {
      const bytes = Uint8Array.from(atob(signatureData.split(",")[1]), (character) => character.charCodeAt(0));
      const upload = await db.storage.from("loan-applications").upload(signaturePath, bytes, { contentType: "image/png", upsert: false });
      if (upload.error) throw upload.error;
      signatureUrl = signaturePath;
    }
    const insert = {
      application_number: applicationNumber, status: "submitted", owner_name: ownerName, ownership_percentage: ownership, city: clean(data.city), address: clean(data.address), state: clean(data.state), zip_code: clean(data.zipCode), mobile, home_phone: clean(data.homePhone), date_of_birth: data.dateOfBirth || null, uid: clean(data.uid), gender: clean(data.gender),
      company_name: clean(data.companyName), year_established: Number(data.yearEstablished) || null, business_city: clean(data.businessCity), business_address: clean(data.businessAddress), years_in_business: Number(data.yearsInBusiness) || null, business_state: clean(data.businessState), fax: clean(data.fax), business_email: businessEmail, business_zip: clean(data.businessZip), business_phone: clean(data.businessPhone), business_type: clean(data.businessType), website: clean(data.website), legal_status: clean(data.legalStatus), number_of_partners: Number(data.numberOfPartners) || null,
      annual_turnover: money(data.annualTurnover), net_profit: money(data.netProfit), total_assets: money(data.totalAssets), total_liabilities: money(data.totalLiabilities), employees: Number(data.employees) || null, total_annual_sales: money(data.totalAnnualSales), inventory_value: money(data.inventoryValue), corporate_bank_name: clean(data.corporateBankName), existing_business_loans: data.existingBusinessLoans === "yes" ? true : data.existingBusinessLoans === "no" ? false : null, existing_lender: clean(data.existingLender), existing_outstanding_balance: money(data.existingOutstandingBalance), existing_monthly_repayment: money(data.existingMonthlyRepayment), existing_loan_count: Number(data.existingLoanCount) || null, existing_line_of_credit: data.existingLineOfCredit === "yes" ? true : data.existingLineOfCredit === "no" ? false : null, line_of_credit_lender: clean(data.lineOfCreditLender), line_of_credit_limit: money(data.lineOfCreditLimit), line_of_credit_balance: money(data.lineOfCreditBalance), real_estate_owned: data.realEstateOwned === "yes" ? true : data.realEstateOwned === "no" ? false : null, property_location: clean(data.propertyLocation), real_estate_value: money(data.realEstateValue), outstanding_mortgage: money(data.outstandingMortgage), approximate_equity: money(data.approximateEquity), bank_statement_availability: clean(data.bankStatementAvailability), account_type: clean(data.accountType), projected_atps: money(data.projectedAtps), business_plan_available: clean(data.businessPlanAvailable), requested_financing_amount: requestedAmount, financing_purpose: clean(data.financingPurpose), financing_purpose_other: clean(data.financingPurposeOther), desired_financing_term: clean(data.desiredFinancingTerm), applicant_email: businessEmail, signature_url: signatureUrl, signed_at: signatureUrl ? new Date().toISOString() : null, signature_user_agent: clean(body.userAgent, 500), document_version: "business-loan-application-v1", data_hash: null, payload: data,
    };
    const { data: application, error: insertError } = await db.from("applications").insert(insert).select("id, application_number, status, created_at").single();
    if (insertError) throw insertError;
    for (const item of Array.isArray(body.files) ? body.files : []) {
      const name = clean(item.name, 180); const type = clean(item.type, 120); const size = Number(item.size);
      if (!name || !allowedTypes.has(type) || !Number.isFinite(size) || size <= 0 || size > maxFileSize) continue;
      await db.from("application_documents").insert({ application_id: application.id, original_name: name, storage_path: `${applicationNumber}/${crypto.randomUUID()}-${name.replace(/[^a-zA-Z0-9._-]/g, "_")}`, mime_type: type, file_size: size, category: clean(item.category, 80) });
    }
    await db.from("application_audit_log").insert({ application_id: application.id, action: "submitted", actor_user_id: user.id, metadata: { user_agent: clean(body.userAgent, 500) } });
    try { await resend.emails.send({ from: "Cruise Finance Group <onboarding@resend.dev>", to: [businessEmail], subject: `Business Financing Application Received — ${applicationNumber}`, html: `<p>Dear ${ownerName},</p><p>We have received your business financing application for ${clean(data.companyName) || "your business"}.</p><p><strong>Application ID:</strong> ${applicationNumber}</p><p>Our team will review your submission and contact you with next steps.</p>` }); } catch (emailError) { console.error("Confirmation email unavailable", emailError); }
    return jsonResponse({ success: true, application });
  } catch (error) { console.error("Business loan submission failed", error); return jsonResponse({ error: "We could not submit your application. Please try again." }, 500); }
});
