import type { LoanApplicationData } from '@/lib/businessLoan';

export const fieldStep: Record<string, number> = {
  ownerName: 0, ownershipPercentage: 0, mobile: 0, homePhone: 0, dateOfBirth: 0, zipCode: 0,
  companyName: 1, yearEstablished: 1, yearsInBusiness: 1, businessEmail: 1, businessPhone: 1, website: 1, numberOfPartners: 1,
  annualTurnover: 2, netProfit: 2, totalAssets: 2, totalLiabilities: 2, employees: 2, totalAnnualSales: 2, inventoryValue: 2,
  requestedFinancingAmount: 3, financingPurpose: 3, financingPurposeOther: 3,
};

const prohibited = /\b(password|passcode|pin|otp|one[- ]time password|card number|cvv|cvc|security code)\b/i;
const phone = /^\+?[0-9\s()-]{7,20}$/;
const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const amount = (v: string) => v === '' || /^\d+(\.\d{1,2})?$/.test(v);

export function validateLoan(d: LoanApplicationData): Record<string, string> {
  const e: Record<string, string> = {};
  const year = new Date().getFullYear();
  if (!d.ownerName.trim()) e.ownerName = 'Owner name is required.';
  else if (d.ownerName.trim().length < 2) e.ownerName = 'Owner name must be at least 2 characters.';
  if (d.ownershipPercentage === '') e.ownershipPercentage = 'Ownership percentage is required.';
  else if (isNaN(Number(d.ownershipPercentage)) || Number(d.ownershipPercentage) < 0 || Number(d.ownershipPercentage) > 100) e.ownershipPercentage = 'Ownership must be a number between 0 and 100.';
  if (!d.mobile.trim()) e.mobile = 'Mobile number is required.';
  else if (!phone.test(d.mobile.trim())) e.mobile = 'Enter a valid mobile number (digits, spaces, +, - only, 7–20 characters).';
  if (d.homePhone && !phone.test(d.homePhone.trim())) e.homePhone = 'Enter a valid phone number.';
  if (d.dateOfBirth) { const age = (Date.now() - new Date(d.dateOfBirth).getTime()) / 31557600000; if (age < 18 || age > 120) e.dateOfBirth = 'Applicant must be at least 18 years old.'; }
  if (d.yearEstablished && (Number(d.yearEstablished) < 1800 || Number(d.yearEstablished) > year)) e.yearEstablished = `Year established must be between 1800 and ${year}.`;
  if (d.yearsInBusiness && (Number(d.yearsInBusiness) < 0 || Number(d.yearsInBusiness) > 300)) e.yearsInBusiness = 'Years in business looks incorrect.';
  if (d.businessEmail && !email.test(d.businessEmail.trim())) e.businessEmail = 'Enter a valid email address, e.g. name@company.com.';
  if (d.businessPhone && !phone.test(d.businessPhone.trim())) e.businessPhone = 'Enter a valid phone number.';
  if (d.website && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+.*$/i.test(d.website.trim())) e.website = 'Enter a valid website, e.g. https://example.com.';
  if (d.legalStatus === 'Partnership' && d.numberOfPartners && Number(d.numberOfPartners) < 2) e.numberOfPartners = 'A partnership needs at least 2 partners.';
  for (const k of ['annualTurnover', 'netProfit', 'totalAssets', 'totalLiabilities', 'totalAnnualSales', 'inventoryValue'] as const) if (!amount(d[k])) e[k] = 'Enter a valid amount (numbers only, up to 2 decimals).';
  if (d.employees && (!Number.isInteger(Number(d.employees)) || Number(d.employees) < 0)) e.employees = 'Number of employees must be a whole number.';
  if (!d.requestedFinancingAmount) e.requestedFinancingAmount = 'Requested financing amount is required.';
  else if (!amount(d.requestedFinancingAmount) || Number(d.requestedFinancingAmount) <= 0) e.requestedFinancingAmount = 'Requested amount must be a number greater than 0.';
  if (!d.financingPurpose) e.financingPurpose = 'Please choose a financing purpose.';
  if (d.financingPurpose === 'Other' && !d.financingPurposeOther.trim()) e.financingPurposeOther = 'Please describe the other purpose.';
  for (const [k, v] of Object.entries(d)) if (typeof v === 'string' && prohibited.test(v) && !e[k]) { e[k] = 'Please remove words like password, PIN, OTP, card number or CVV — we never need banking credentials.'; if (fieldStep[k] === undefined) fieldStep[k] = 0; }
  return e;
}
