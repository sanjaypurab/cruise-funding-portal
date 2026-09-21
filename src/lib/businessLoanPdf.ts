import { jsPDF } from 'jspdf';
import type { LoanApplicationData } from './businessLoan';

type PdfSource = Partial<LoanApplicationData> & Record<string, unknown>;

const value = (source: PdfSource, key: string) => {
  const result = source[key];
  return result === undefined || result === null || result === '' ? 'Not provided' : String(result);
};

export function createLoanPdf(source: PdfSource) {
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 44;
  const width = 507;
  let y = 48;

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(17);
  pdf.text('Cruise Finance Group', margin, y);
  y += 24;
  pdf.setFontSize(12);
  pdf.text('Business Financing Application', margin, y);
  y += 22;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'bold');
  pdf.text('DRAFT / NOT SIGNED', margin, y);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Application ID: ${value(source, 'application_number')}`, width + margin - 180, y, { align: 'right' });
  y += 30;

  const section = (title: string, entries: [string, string][]) => {
    if (y > 735) { pdf.addPage(); y = 48; }
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text(title, margin, y);
    y += 17;
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    entries.forEach(([label, entry]) => {
      const lines = pdf.splitTextToSize(`${label}: ${entry}`, width);
      if (y > 765) { pdf.addPage(); y = 48; }
      pdf.text(lines, margin, y);
      y += 13 * lines.length + 4;
    });
    y += 8;
  };

  section('Applicant', [
    ['Owner name', value(source, 'ownerName') === 'Not provided' ? value(source, 'owner_name') : value(source, 'ownerName')],
    ['Ownership', `${value(source, 'ownershipPercentage') === 'Not provided' ? value(source, 'ownership_percentage') : value(source, 'ownershipPercentage')}%`],
    ['Mobile', value(source, 'mobile')],
    ['Email', value(source, 'businessEmail') === 'Not provided' ? value(source, 'business_email') : value(source, 'businessEmail')],
  ]);
  section('Business', [
    ['Company', value(source, 'companyName') === 'Not provided' ? value(source, 'company_name') : value(source, 'companyName')],
    ['Business type', value(source, 'businessType') === 'Not provided' ? value(source, 'business_type') : value(source, 'businessType')],
    ['Legal status', value(source, 'legalStatus') === 'Not provided' ? value(source, 'legal_status') : value(source, 'legalStatus')],
    ['Years in business', value(source, 'yearsInBusiness') === 'Not provided' ? value(source, 'years_in_business') : value(source, 'yearsInBusiness')],
  ]);
  section('Financial', [
    ['Annual turnover (USD)', value(source, 'annualTurnover') === 'Not provided' ? value(source, 'annual_turnover') : value(source, 'annualTurnover')],
    ['Net profit (USD)', value(source, 'netProfit') === 'Not provided' ? value(source, 'net_profit') : value(source, 'netProfit')],
    ['Total assets (USD)', value(source, 'totalAssets') === 'Not provided' ? value(source, 'total_assets') : value(source, 'totalAssets')],
    ['Total annual sales (USD)', value(source, 'totalAnnualSales') === 'Not provided' ? value(source, 'total_annual_sales') : value(source, 'totalAnnualSales')],
  ]);
  section('Financing request', [
    ['Requested amount (USD)', value(source, 'requestedFinancingAmount') === 'Not provided' ? value(source, 'requested_financing_amount') : value(source, 'requestedFinancingAmount')],
    ['Purpose', value(source, 'financingPurpose') === 'Not provided' ? value(source, 'financing_purpose') : value(source, 'financingPurpose')],
    ['Desired term', value(source, 'desiredFinancingTerm') === 'Not provided' ? value(source, 'desired_financing_term') : value(source, 'desiredFinancingTerm')],
    ['Status', value(source, 'status')],
  ]);
  pdf.setFontSize(8);
  pdf.setTextColor(100);
  pdf.text('This draft is for review only. It is not a signed agreement or funding offer.', margin, 795);
  return pdf;
}

export function downloadLoanPdf(source: PdfSource, filename = 'business-financing-application-draft.pdf') {
  createLoanPdf(source).save(filename);
}

export function createLoanPdfUrl(source: PdfSource) {
  return URL.createObjectURL(createLoanPdf(source).output('blob'));
}