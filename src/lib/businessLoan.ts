export type LoanApplicationData = {
  ownerName: string;
  ownershipPercentage: string;
  city: string;
  address: string;
  state: string;
  zipCode: string;
  mobile: string;
  homePhone: string;
  dateOfBirth: string;
  uid: string;
  gender: string;
  companyName: string;
  yearEstablished: string;
  businessCity: string;
  businessAddress: string;
  yearsInBusiness: string;
  businessState: string;
  fax: string;
  businessEmail: string;
  businessZip: string;
  businessPhone: string;
  businessType: string;
  website: string;
  legalStatus: string;
  numberOfPartners: string;
  annualTurnover: string;
  netProfit: string;
  totalAssets: string;
  totalLiabilities: string;
  employees: string;
  totalAnnualSales: string;
  inventoryValue: string;
  corporateBankName: string;
  existingBusinessLoans: string;
  existingLender: string;
  existingOutstandingBalance: string;
  existingMonthlyRepayment: string;
  existingLoanCount: string;
  existingLineOfCredit: string;
  lineOfCreditLender: string;
  lineOfCreditLimit: string;
  lineOfCreditBalance: string;
  realEstateOwned: string;
  propertyLocation: string;
  realEstateValue: string;
  outstandingMortgage: string;
  approximateEquity: string;
  bankStatementAvailability: string;
  accountType: string;
  projectedAtps: string;
  businessPlanAvailable: string;
  requestedFinancingAmount: string;
  financingPurpose: string;
  financingPurposeOther: string;
  desiredFinancingTerm: string;
  privacyConsent: boolean;
};

export const emptyLoanApplication: LoanApplicationData = {
  ownerName: '', ownershipPercentage: '', city: '', address: '', state: '', zipCode: '', mobile: '', homePhone: '', dateOfBirth: '', uid: '', gender: '',
  companyName: '', yearEstablished: '', businessCity: '', businessAddress: '', yearsInBusiness: '', businessState: '', fax: '', businessEmail: '', businessZip: '', businessPhone: '', businessType: '', website: '', legalStatus: '', numberOfPartners: '',
  annualTurnover: '', netProfit: '', totalAssets: '', totalLiabilities: '', employees: '', totalAnnualSales: '', inventoryValue: '', corporateBankName: '',
  existingBusinessLoans: '', existingLender: '', existingOutstandingBalance: '', existingMonthlyRepayment: '', existingLoanCount: '', existingLineOfCredit: '', lineOfCreditLender: '', lineOfCreditLimit: '', lineOfCreditBalance: '',
  realEstateOwned: '', propertyLocation: '', realEstateValue: '', outstandingMortgage: '', approximateEquity: '', bankStatementAvailability: '', accountType: '', projectedAtps: '', businessPlanAvailable: '',
  requestedFinancingAmount: '', financingPurpose: '', financingPurposeOther: '', desiredFinancingTerm: '', privacyConsent: false,
};

export type LoanUpload = { id: string; file: File; category: string };

export const formatCurrency = (value: string) => {
  if (!value) return '';
  const amount = Number(value.replace(/[^0-9.]/g, ''));
  if (Number.isNaN(amount)) return value;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
};

export const numberValue = (value: string) => Number(value.replace(/[^0-9.]/g, '')) || 0;

export const calculateYears = (year: string) => {
  const established = Number(year);
  if (!established || established < 1800 || established > new Date().getFullYear()) return '';
  return String(Math.max(0, new Date().getFullYear() - established));
};

export const prettyLabel = (value: string) => value.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
