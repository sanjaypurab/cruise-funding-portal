import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ContentSection = {
  title: string;
  intro?: string;
  items?: string[];
  cards?: { title: string; text: string }[];
};

export type ServiceDetail = {
  eyebrow: string;
  title: string;
  subtitle: string;
  introduction: string[];
  structure: string[];
  sections: ContentSection[];
  process: { title: string; text: string }[];
  disclaimer: string;
};

const gccJurisdictions = 'United Arab Emirates, Saudi Arabia, Bahrain, Qatar, Kuwait and Oman.';

export const serviceDetails: Record<string, ServiceDetail> = {
  'business-loans': {
    eyebrow: 'Cruise World International Mediation Financing Broker',
    title: 'Business Loans',
    subtitle: 'Structured financing pathways for eligible commercial requirements.',
    introduction: [
      'We facilitate business-loan opportunities for eligible companies seeking financing for expansion, working capital, asset acquisition, refinancing, business development and other approved commercial purposes.',
      'Our role is to connect qualifying borrowers with potential financing sources and coordinate the assessment, structuring and documentation of suitable transactions. For mandates using a GCC structure, an appropriate SPV or SPE must be established before final financing and disbursement.',
    ],
    structure: ['Borrowing Company / Applicant', 'GCC SPV / SPE, where required', 'Loan / Financing Agreement', 'Financing Institution / Investor / Lender', 'Approved Business Purpose', 'Repayment according to agreed terms'],
    sections: [
      {
        title: 'Eligible Business Purposes',
        intro: 'Applications may be considered for a wide range of approved commercial purposes.',
        items: ['Business expansion', 'Working capital', 'Equipment, machinery and productive assets', 'Commercial property', 'Business acquisition', 'Refinancing of eligible obligations', 'Inventory and import/export financing', 'Construction and new facilities', 'Manufacturing and technology investment', 'Transportation and logistics', 'Healthcare, energy, hospitality and tourism', 'International business expansion'],
      },
      {
        title: 'Business Loan Categories',
        cards: [
          { title: 'Working Capital', text: 'Short- and medium-term operational needs, including inventory, receivables and operating expenses.' },
          { title: 'Expansion Financing', text: 'Capital for production growth, new markets, facilities and increased operating capacity.' },
          { title: 'Equipment & Assets', text: 'Financing for qualifying machinery, vehicles, technology and productive business assets.' },
          { title: 'Commercial Property', text: 'Eligible acquisition, development or refinancing of commercial property.' },
          { title: 'Acquisition & Refinancing', text: 'Qualifying business acquisitions, strategic transactions and eligible existing obligations.' },
          { title: 'Structured Financing', text: 'Customized arrangements based on cash flow, assets, contracts, project revenue and security.' },
        ],
      },
      {
        title: 'GCC SPV/SPE Requirement',
        intro: `Where the mandate requires a GCC transaction vehicle, the applicant must establish an appropriate SPV/SPE. Potential jurisdictions include ${gccJurisdictions} The vehicle may receive proceeds, hold designated assets, administer cash flows, document lender rights, manage repayment and monitor use of funds.`,
      },
      {
        title: 'Assessment & Due Diligence',
        items: ['Corporate identity, ownership, beneficial owners and directors', 'Operating history and corporate structure', 'Revenue, profitability, balance sheet, cash flow, debt, assets and liabilities', 'Requested amount, purpose, tenor, grace period and repayment capacity', 'Customers, contracts, market position and growth strategy', 'Corporate, financial, commercial and legal due diligence', 'Identity, sanctions, source-of-funds and KYC/AML checks'],
      },
      {
        title: 'Indicative Loan Terms',
        items: ['Loan amount and agreed currency', 'Financing tenor and any approved grace period', 'Interest or financing cost', 'Amortizing, bullet or other agreed repayment structure', 'Applicable collateral or security package', 'Approved use of proceeds', 'Conditions precedent, covenants and reporting requirements'],
      },
      {
        title: 'Borrower Protection & Transaction Controls',
        items: ['Dedicated project or business accounts', 'Controlled disbursement and escrow arrangements', 'Defined use-of-proceeds provisions', 'Financial reporting and repayment schedules', 'Security documentation and lender consent requirements', 'Insurance and other contractual protections'],
      },
    ],
    process: [
      { title: 'Loan Application', text: 'Submit corporate, financial and financing information.' },
      { title: 'Preliminary Assessment', text: 'Initial review of the proposed financing transaction.' },
      { title: 'Due Diligence', text: 'Corporate, financial, commercial, legal and KYC/AML review.' },
      { title: 'Financing Structure', text: 'Develop amount, tenor, cost, repayment, security and conditions.' },
      { title: 'GCC SPV/SPE', text: 'Establish the designated vehicle where the mandate requires one.' },
      { title: 'Credit Review', text: 'The financing provider completes its own approval procedures.' },
      { title: 'Documentation', text: 'Execute loan, security, corporate and SPV/SPE documents.' },
      { title: 'Conditions Precedent', text: 'Satisfy all requirements before drawdown.' },
      { title: 'Disbursement', text: 'Approved financing is released under the executed agreement.' },
      { title: 'Repayment & Monitoring', text: 'Meet contractual repayment and reporting obligations.' },
    ],
    disclaimer: 'The exact structure, terms and security package depend on the applicant, financing source, jurisdiction, credit assessment and applicable law. Submission and SPV/SPE establishment do not guarantee approval or disbursement.',
  },
  'project-financing': {
    eyebrow: 'Structured project financing',
    title: 'Project Financing',
    subtitle: 'A dedicated GCC SPV/SPE framework for commercially viable projects.',
    introduction: [
      'We facilitate structured project-financing opportunities for eligible companies, sponsors, developers and investment groups seeking capital for commercially viable projects.',
      'Under designated mandates, an appropriate GCC SPV/SPE provides the legal and transactional framework through which the project, financing, security arrangements, investor or lender interests and project cash flows can be documented and administered.',
    ],
    structure: ['Project Applicant / Sponsor', 'GCC SPV / SPE', 'Project Financing Agreement', 'Investor / Financing Institution', 'Project Development & Implementation'],
    sections: [
      { title: 'Eligible Project Categories', items: ['Infrastructure development', 'Energy, renewable energy and power', 'Oil and gas-related infrastructure', 'Commercial and residential real estate', 'Industrial and manufacturing projects', 'Mining and natural resources', 'Transportation, logistics, ports and maritime infrastructure', 'Healthcare facilities', 'Technology and telecommunications', 'Tourism and hospitality', 'Water and waste management', 'Public-private partnerships and other viable projects'] },
      { title: 'GCC SPV/SPE Requirement', intro: `For transactions subject to this mandate, the applicant must establish an appropriately structured vehicle in an eligible jurisdiction: ${gccJurisdictions} It may hold project rights or assets, enter financing agreements, administer proceeds, segregate cash flows, establish governance and facilitate monitoring.` },
      { title: 'Project Assessment', cards: [
        { title: 'Project Viability', text: 'Concept, stage, technical and commercial feasibility, market demand and timetable.' },
        { title: 'Sponsor', text: 'Structure, ownership, management experience, financial capacity and track record.' },
        { title: 'Financial', text: 'Total cost, requested financing, sponsor contribution, revenue, expenses, cash flow and debt service.' },
        { title: 'Legal & Regulatory', text: 'Title, permits, contracts, approvals, liabilities, litigation and existing security.' },
        { title: 'KYC / AML', text: 'Identity, corporate and beneficial-ownership verification, sanctions and source-of-funds checks.' },
      ] },
      { title: 'Potential Financing Structures', cards: [
        { title: 'Senior Project Finance', text: 'Supported primarily by expected project cash flows and agreed security.' },
        { title: 'Development Finance', text: 'For development, construction, acquisition and approved expenditure.' },
        { title: 'Construction Finance', text: 'Dedicated to an approved project’s construction and completion phase.' },
        { title: 'Asset-Backed Finance', text: 'Supported by identified project assets or contractual rights.' },
        { title: 'Structured Project Finance', text: 'Combines contractual, security and cash-flow mechanisms.' },
        { title: 'Public-Private Partnerships', text: 'For qualifying public infrastructure or concession projects.' },
      ] },
      { title: 'Conditions Before Funding', items: ['Successful due diligence', 'Confirmed legal ownership and sponsor verification', 'Established GCC SPV/SPE', 'Completed financing and security documents', 'Required permits and approvals', 'Confirmed financial model', 'Completed KYC/AML requirements', 'Evidence of sponsor contribution where applicable', 'Any additional agreed conditions precedent'] },
      { title: 'Security & Investor Protection', items: ['Share pledges and asset security', 'Assignment of receivables and insurance proceeds', 'Project-account controls and escrow', 'Sponsor, corporate, parent or completion guarantees', 'Debt-service reserves and transaction-specific protection'] },
    ],
    process: [
      { title: 'Application', text: 'Submit the project and financing proposal.' },
      { title: 'Preliminary Assessment', text: 'Initial commercial and transaction review.' },
      { title: 'Due Diligence', text: 'Corporate, financial, technical, legal, regulatory and KYC/AML reviews.' },
      { title: 'Financing Structuring', text: 'Develop amount, tenor, repayment, security and cash-flow terms.' },
      { title: 'GCC SPV/SPE', text: 'Establish the required project vehicle.' },
      { title: 'Documentation', text: 'Prepare and execute financing, security, corporate and project agreements.' },
      { title: 'Financial Close', text: 'Complete approvals and all applicable conditions precedent.' },
      { title: 'Funding', text: 'Release financing under the agreed drawdown schedule.' },
      { title: 'Monitoring', text: 'Report implementation, use of proceeds, milestones and performance where required.' },
    ],
    disclaimer: 'Establishing an SPV/SPE does not constitute approval or guarantee financing. Every transaction remains subject to due diligence, independent investor or lender approval, legal documentation, conditions precedent, applicable law and licensing requirements.',
  },
  'international-funding': {
    eyebrow: 'Cross-border capital solutions',
    title: 'International Funding',
    subtitle: 'Cross-border funding through a structured GCC SPV/SPE framework.',
    introduction: [
      'We facilitate international funding opportunities for eligible companies, project sponsors, investment groups and established businesses seeking cross-border capital for qualifying commercial and development purposes.',
      'The mandate connects eligible applicants with potential international funding sources while providing a framework for due diligence, documentation, investment protection and controlled deployment of capital.',
    ],
    structure: ['International Applicant / Project Sponsor', 'GCC SPV / SPE', 'Funding & Investment Agreements', 'International Investor / Funding Source', 'Approved Business / Project'],
    sections: [
      { title: 'International Funding Opportunities', items: ['Corporate expansion and acquisitions', 'Infrastructure and public-private partnerships', 'Energy and renewable energy', 'Real estate and development', 'Industrial development, manufacturing and mining', 'Transportation, logistics, maritime and shipping', 'Healthcare, technology and telecommunications', 'Tourism and hospitality', 'Agriculture and food production', 'Working capital, equipment and asset acquisition', 'Strategic international ventures and other viable projects'] },
      { title: 'GCC SPV/SPE Requirement', intro: `Where required, an appropriate vehicle must be established in an eligible jurisdiction: ${gccJurisdictions} It may receive approved funding, hold project interests, administer accounts, document rights, segregate liabilities, establish security, manage cash flows and monitor proceeds.` },
      { title: 'Funding Categories', cards: [
        { title: 'Corporate Funding', text: 'Expansion, acquisitions, facilities, equipment, working capital and international operations.' },
        { title: 'Project Funding', text: 'Qualifying projects supported by a plan, model, documentation and repayment or investment structure.' },
        { title: 'Development Funding', text: 'Acquisition, planning, construction, development or commercialization.' },
        { title: 'Strategic Funding', text: 'Capital alongside a strategic investor, business partner or international investment group.' },
        { title: 'Structured Funding', text: 'Customized contractual, corporate, security, investment and cash-flow mechanisms.' },
        { title: 'Equity or Debt', text: 'Permitted ownership participation or appropriately licensed financing facilities.' },
      ] },
      { title: 'Applicant Information', items: ['Certificate of incorporation and corporate profile', 'Shareholder, director and beneficial-owner information', 'Business plan or feasibility study', 'Financial statements and existing liabilities', 'Funding requirement and use of funds', 'Project contracts, licences and permits', 'Valuation and applicable security information', 'Other transaction-specific documentation'] },
      { title: 'Due Diligence Framework', items: ['Corporate identity and ownership verification', 'Financial statements, cash flow, assets, liabilities and projections', 'Ownership, contracts, licences, litigation and regulatory status', 'Business model, market, customers, suppliers and competition', 'Technical or engineering feasibility where applicable', 'Identity, sanctions, beneficial ownership and source-of-funds checks'] },
      { title: 'Potential Transaction Protections', items: ['Dedicated project accounts and escrow', 'SPV/SPE ownership structures', 'Security agreements and assignment of receivables', 'Share pledges and asset security', 'Insurance assignments and permitted guarantees', 'Debt-service reserves and other legally permissible protections'] },
    ],
    process: [
      { title: 'Funding Application', text: 'Submit company, project and funding requirements.' },
      { title: 'Preliminary Assessment', text: 'Initial assessment of the proposed transaction.' },
      { title: 'Due Diligence', text: 'Corporate, financial, legal, commercial, technical and KYC/AML review.' },
      { title: 'Funding Structure', text: 'Determine the structure and principal commercial terms.' },
      { title: 'GCC SPV/SPE', text: 'Establish the appropriate vehicle where required.' },
      { title: 'Documentation', text: 'Prepare, review and execute investment and funding agreements.' },
      { title: 'Conditions Precedent', text: 'Complete approvals, security and all required documentation.' },
      { title: 'Financial Close', text: 'Complete approval by the relevant funding party.' },
      { title: 'Funding / Drawdown', text: 'Release funds under the agreed schedule.' },
      { title: 'Monitoring & Reporting', text: 'Monitor proceeds, milestones and performance where required.' },
    ],
    disclaimer: 'Submission or establishment of an SPV/SPE does not guarantee funding. Cruise World does not guarantee approval, availability, returns, profitability or transaction completion. All opportunities remain subject to law, regulation, sanctions, licensing and independent funding-party approval.',
  },
  'venture-capital': {
    eyebrow: 'Growth capital for scalable ventures',
    title: 'Venture Capital Investment',
    subtitle: 'Connecting eligible high-growth businesses with prospective international investors.',
    introduction: [
      'Our venture-capital pathway is designed for businesses seeking growth capital in exchange for equity or equity-linked participation, particularly where scalability, innovation, intellectual property, technology or market-expansion potential is clear.',
      'For transactions subject to the GCC structure, the applicant must establish an appropriate SPV/SPE before final investment structuring and completion.',
    ],
    structure: ['Founder / Applicant Company', 'GCC SPV / SPE, where required', 'Venture Capital Investor / Vehicle', 'Equity / Equity-Linked Investment', 'Growth Company / Venture', 'Expansion • Commercialization • Scale'],
    sections: [
      { title: 'Eligible Ventures', items: ['Technology, FinTech and artificial intelligence', 'HealthTech, medical technology and biotechnology', 'Software, SaaS, digital platforms and cybersecurity', 'Deep tech and intellectual-property-based businesses', 'CleanTech, climate and renewable-energy technology', 'E-commerce and consumer technology', 'Logistics, mobility and transportation technology', 'Advanced manufacturing and innovative industrial ventures', 'Telecommunications and high-growth services'] },
      { title: 'Investment Stages', cards: [
        { title: 'Pre-Seed', text: 'Initial concept, prototype, technology or business-model development.' },
        { title: 'Seed', text: 'Product development, market validation and initial team building.' },
        { title: 'Series A', text: 'Scaling a validated model, operations and customer acquisition.' },
        { title: 'Series B', text: 'Significant expansion, market penetration and organizational growth.' },
        { title: 'Series C & Later', text: 'International growth, acquisitions, commercialization and strategic events.' },
        { title: 'Growth Capital', text: 'Expansion for established businesses with proven operations.' },
      ] },
      { title: 'Potential Investment Structures', items: ['Ordinary equity', 'Preferred equity with negotiated rights', 'Convertible or equity-linked investment', 'Strategic investment with technology, distribution or market access', 'SPV-based participation subject to applicable law'] },
      { title: 'GCC SPV/SPE Requirement', intro: `Where the mandate applies, the structure may be established in ${gccJurisdictions} Selection depends on the investor, company, activity, regulation, securities, tax, ownership and corporate-law considerations.` },
      { title: 'Venture Assessment', cards: [
        { title: 'Business Model', text: 'Product, revenue model, customers, market, competition and scalability.' },
        { title: 'Technology & IP', text: 'Platform, patents, proprietary technology, software and development stage.' },
        { title: 'Market Potential', text: 'Addressable market, demand, growth and geographic expansion.' },
        { title: 'Management', text: 'Founder background, technical expertise, commercial capability and structure.' },
        { title: 'Financial Position', text: 'Revenue, cash burn, expenses, existing funding, projections and capital needs.' },
        { title: 'Investment Request', text: 'Capital, valuation, equity offered, use of proceeds and milestones.' },
      ] },
      { title: 'Investor Rights & Exit', items: ['Ownership, voting, board and information rights', 'Reserved matters, pre-emption and anti-dilution provisions', 'Transfer, tag-along and drag-along rights', 'Liquidation preferences and conversion rights', 'Potential exits through acquisition, trade sale, merger, buyback, secondary sale, later financing or public markets'] },
    ],
    process: [
      { title: 'Application', text: 'Submit the venture profile, proposal and capital requirement.' },
      { title: 'Preliminary Assessment', text: 'Initial review of the venture and opportunity.' },
      { title: 'Due Diligence', text: 'Corporate, financial, commercial, technical, legal and KYC/AML review.' },
      { title: 'Investment Structuring', text: 'Negotiate valuation, amount, equity and investor rights.' },
      { title: 'GCC SPV/SPE', text: 'Establish the designated structure where required.' },
      { title: 'Term Sheet', text: 'Document principal commercial and governance terms.' },
      { title: 'Investment Documents', text: 'Prepare subscription, shareholder, investment and related agreements.' },
      { title: 'Completion', text: 'Close after satisfying applicable conditions precedent.' },
      { title: 'Growth & Monitoring', text: 'Provide agreed financial and operational reporting.' },
    ],
    disclaimer: 'Investment and exit are not guaranteed. Outcomes depend on company performance, market conditions, investor approval, negotiated documents and applicable law.',
  },
  'equity-investments': {
    eyebrow: 'Ownership capital and strategic participation',
    title: 'Equity Investments',
    subtitle: 'A structured pathway connecting eligible companies and projects with prospective investors.',
    introduction: [
      'Equity investment differs from a conventional loan: an investor provides capital in exchange for an ownership interest or equity-linked contractual interest in the underlying company or project.',
      'We facilitate opportunities for eligible businesses, projects and applicants under a structured GCC-based SPV/SPE framework. For designated mandates, equity consideration is conditional upon establishing the appropriate vehicle.',
    ],
    structure: ['Applicant / Existing Company or Project', 'GCC SPV / SPE', 'Equity Investment / Investor Capital', 'Target Company / Project', 'Documented Investor Rights'],
    sections: [
      { title: 'Core Transaction Principle', intro: 'No GCC SPV/SPE — no equity investment processing under a designated GCC mandate. The requirement creates a clearly identifiable legal vehicle through which the investment can be structured, documented, administered and monitored.' },
      { title: 'Eligible GCC Jurisdictions', intro: `Subject to the transaction, investor requirements and local law, a vehicle may be established in ${gccJurisdictions} The appropriate choice depends on the investment, applicant, project, regulated activity and applicable corporate or securities requirements.` },
      { title: 'Why an SPV/SPE May Be Used', cards: [
        { title: 'Investment Segregation', text: 'Ring-fence transaction assets and liabilities from unrelated activities.' },
        { title: 'Defined Ownership', text: 'Document owners, control, signatories and the equity being acquired.' },
        { title: 'Transparency', text: 'Anchor the investment to a specific legal and contractual framework.' },
        { title: 'Investor Protection', text: 'Define governance, reporting, distributions, transfers, exits and disputes.' },
        { title: 'Cross-Border Management', text: 'Coordinate international participation subject to local law and licensing.' },
      ] },
      { title: 'Potential Equity Structures', cards: [
        { title: 'Ordinary / Common Equity', text: 'New shares representing an agreed ownership percentage.' },
        { title: 'Preferred Equity', text: 'A class carrying negotiated dividends, preferences, voting or conversion rights.' },
        { title: 'Strategic Equity', text: 'Capital together with technology, distribution, expertise or market access.' },
        { title: 'Project-Level Equity', text: 'Investment into a dedicated project company or SPV.' },
        { title: 'Convertible / Equity-Linked', text: 'Capital that may convert into equity after specified events.' },
        { title: 'Joint-Venture Equity', text: 'Shared participation governed by agreed ownership and control terms.' },
      ] },
      { title: 'What We Facilitate', items: ['Investor sourcing and introductions', 'Capital-raising and investment structuring', 'Initial commercial and financial assessment', 'Due-diligence and KYC/AML coordination', 'Valuation information and proposed terms', 'SPV/SPE and term-sheet coordination', 'Transaction-document coordination', 'Closing, reporting and investor communication arrangements'] },
      { title: 'Investor Protection Framework', items: ['Legally documented ownership', 'Defined voting, consent and board rights', 'Agreed financial and operating information rights', 'Permitted use-of-funds provisions', 'Negotiated transfer and exit mechanisms', 'Transaction segregation where appropriate'] },
      { title: 'Applicant Requirements', items: ['Corporate and ownership verification', 'KYC/AML and beneficial-owner checks', 'Financial and commercial due diligence', 'Legal and regulatory review', 'Investment valuation and structuring', 'GCC SPV/SPE establishment where required', 'Executed investment agreements', 'Satisfaction of all conditions precedent'] },
    ],
    process: [
      { title: 'Equity Application', text: 'Submit the company, project and investment proposal.' },
      { title: 'Preliminary Assessment', text: 'Review the model, requirement, ownership, financials and management.' },
      { title: 'Due Diligence', text: 'Complete applicable corporate, financial, legal and KYC/AML checks.' },
      { title: 'Equity Structuring', text: 'Determine amount, valuation, equity, governance, distributions and exit.' },
      { title: 'GCC SPV/SPE', text: 'Establish the required vehicle through qualified providers.' },
      { title: 'Legal Documentation', text: 'Prepare subscription, shareholder, investment and corporate documents.' },
      { title: 'Approval / Commitment', text: 'Proceed after relevant approvals and conditions are met.' },
      { title: 'Closing', text: 'Transfer capital and issue or transfer the corresponding equity interest.' },
    ],
    disclaimer: 'An SPV/SPE does not automatically guarantee or secure an investment. Equity investment remains subject to due diligence, investor approval, valuation, legal and regulatory requirements, transaction documentation and final agreement. Returns, funding availability and completion are not guaranteed.',
  },
};

const ServiceDetailPage: React.FC<{ serviceKey: keyof typeof serviceDetails }> = ({ serviceKey }) => {
  const service = serviceDetails[serviceKey];

  return (
    <main className="pb-0">
      <section className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase text-primary">{service.eyebrow}</p>
          <h1 className="mb-5 text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">{service.subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14 md:px-6">
        <section className="mx-auto mb-16 max-w-4xl">
          {service.introduction.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-lg leading-8 text-muted-foreground">{paragraph}</p>
          ))}
          <div className="mt-8 border-l-4 border-primary bg-secondary p-6">
            <p className="mb-4 font-semibold">Typical transaction pathway</p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-primary">
              {service.structure.map((step, index) => (
                <React.Fragment key={step}>
                  <span>{step}</span>
                  {index < service.structure.length - 1 && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {service.sections.map((section, sectionIndex) => (
          <section key={section.title} className={sectionIndex % 2 === 1 ? 'mb-16 bg-secondary py-10' : 'mb-16'}>
            <div className={sectionIndex % 2 === 1 ? 'mx-auto max-w-6xl px-5 md:px-8' : 'mx-auto max-w-6xl'}>
              <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>
              {section.intro && <p className="mb-7 max-w-4xl text-lg leading-8 text-muted-foreground">{section.intro}</p>}
              {section.items && (
                <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 border-b border-border py-3 text-sm leading-6">
                      <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.cards && (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {section.cards.map((card) => (
                    <article key={card.title} className="border border-border bg-card p-6 shadow-sm">
                      <h3 className="mb-2 text-lg font-semibold text-primary">{card.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{card.text}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="mx-auto mb-16 max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">How the Process Works</h2>
          <ol className="grid gap-5 md:grid-cols-2">
            {service.process.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-b border-border pb-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto mb-16 max-w-4xl border border-border bg-muted p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="mb-2 text-lg font-semibold">Important Information</h2>
              <p className="text-sm leading-6 text-muted-foreground">{service.disclaimer}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-cruise-900 py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold">Present Your Financing Requirement</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-cruise-100">Submit your information for an initial assessment by our team.</p>
          <Button asChild size="lg" className="group">
            <Link to="/business-loan-application">Start Your Application<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;