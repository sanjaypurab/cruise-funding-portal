
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  FileCheck,
  ClipboardList,
  Search,
  Landmark,
  Scale,
  FolderSearch,
  BadgeCheck,
  Globe,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

const viabilityFactors = [
  'Business model',
  'Market opportunity',
  'Revenue potential',
  'Development stage',
  'Capital requirements',
  'Financial projections',
  'Management capability',
  'Commercial contracts',
  'Expected returns',
  'Repayment strategy',
  'Industry and jurisdictional considerations',
];

const financialCapacityFactors = [
  'Existing financial statements',
  'Historical business performance',
  'Projected cash flow',
  'Existing obligations',
  'Assets and liabilities',
  'Equity contribution',
  'Sources of repayment',
  'Requested financing amount',
  'Proposed financing term',
];

const spvPurposes = [
  { title: 'Receive', text: 'Approved investment or financing proceeds through a designated corporate structure.' },
  { title: 'Separate', text: 'The financed project from unrelated business activities.' },
  { title: 'Control', text: 'The permitted use and administration of investment proceeds.' },
  { title: 'Protect', text: 'The interests of the relevant parties through defined contractual and corporate arrangements.' },
  { title: 'Monitor', text: 'Project cash flows, reporting obligations and financing activities.' },
  { title: 'Document', text: 'Ownership, signing authority, repayment obligations and investment rights.' },
];

const dueDiligenceDocs = [
  'Certificate of incorporation',
  'Corporate registration documents',
  "Directors' identification",
  'Beneficial ownership information',
  'Proof of business address',
  'Corporate constitutional documents',
  'Financial statements',
  'Project documentation',
  'Commercial agreements',
  'Licenses and permits where applicable',
  'Banking information',
  'Source-of-funds information where applicable',
  'Additional KYC/AML documentation',
];

const transactionSteps = [
  'Application — submission of the financing request and initial project information.',
  'Preliminary assessment — review of the applicant, project and proposed financing requirement.',
  'Due diligence — corporate, financial, ownership and project verification.',
  'SPV / SPE formation — establishment of the appropriate investment vehicle where required.',
  'Structuring — development of the financing, investment, security and repayment framework.',
  'Documentation — completion and execution of required agreements and corporate documents.',
  'Final financing review — submission for consideration by the relevant financing party.',
  'Funding — subject to satisfaction of all applicable conditions precedent and execution of the final agreements.',
];

const principles = [
  { title: 'Project', text: 'A clearly defined commercial opportunity.' },
  { title: 'Structure', text: 'An appropriate corporate and investment framework.' },
  { title: 'Due Diligence', text: 'Verification of the applicant, ownership and transaction.' },
  { title: 'Protection', text: 'Defined contractual and corporate arrangements.' },
  { title: 'Readiness', text: 'A transaction prepared for financing consideration.' },
];

const whoCanApply = [
  'Established businesses',
  'Entrepreneurs',
  'Project developers',
  'Infrastructure projects',
  'Construction projects',
  'Energy projects',
  'Real estate developments',
  'Industrial projects',
  'Transportation projects',
  'Technology ventures',
  'Healthcare projects',
  'Alternative investments',
  'Other commercially viable investment opportunities',
];

const requiredInfo = [
  'Company profile',
  'Project description',
  'Requested financing amount',
  'Intended use of funds',
  'Business plan or feasibility study',
  'Financial projections',
  'Corporate registration documents',
  'Ownership information',
  'Existing financing obligations',
  'Proposed repayment strategy',
];

const keyQuestions = [
  'What is the project?',
  'How will the capital be used?',
  'What entity will receive and administer the investment?',
  'How will the investment be protected and monitored?',
  'How will repayment be generated?',
  'Is the transaction properly structured for financing consideration?',
];

const InvestmentFinancing: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cruise-50 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
          <p className="text-cruise-600 font-semibold uppercase tracking-wide text-sm mb-3">
            Cruise World International Mediation Financing Broker
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Financing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Structured financing for serious business &amp; investment projects.
          </p>
          <p className="text-lg text-cruise-700 font-medium max-w-3xl mx-auto">
            Your project. Your corporate structure. Your financing pathway.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-20">
          <p className="text-lg text-gray-600 mb-6">
            <strong className="text-gray-800">Cruise World International Mediation Financing Broker</strong> facilitates
            the preparation, structuring and mediation of investment-financing opportunities for qualifying businesses,
            entrepreneurs, project developers and investment sponsors.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We focus on projects that require structured capital and a clearly defined financing framework — from
            initial assessment and due diligence through corporate structuring, documentation and financing
            consideration.
          </p>
          <div className="bg-cruise-50 border-l-4 border-cruise-500 rounded-r-xl p-6">
            <p className="text-lg font-semibold text-cruise-900 mb-2">
              Financing is not simply about requesting capital.
            </p>
            <p className="text-gray-700">
              It is about demonstrating that the project, company, financial structure and investment vehicle are ready
              for institutional consideration.
            </p>
          </div>
        </section>

        {/* 5 Key Factors */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              5 Key Factors That Determine Investment Loan Approval
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we assess before a transaction can progress toward funding.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* 01 Project Viability */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-cruise-200 mr-4">01</span>
                <div>
                  <h3 className="text-xl font-bold">Project Viability</h3>
                  <p className="text-gray-500 text-sm">Is the project commercially investable?</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                The foundation of every financing application is the underlying project. Our assessment considers the
                project's:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {viabilityFactors.map((f) => (
                  <li key={f} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-cruise-500 mr-2 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4 text-sm">
                A compelling project must demonstrate a clear purpose for the requested capital and a credible pathway
                toward revenue generation and repayment.
              </p>
            </div>

            {/* 02 Financial Capacity */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-cruise-200 mr-4">02</span>
                <div>
                  <h3 className="text-xl font-bold">Financial Capacity</h3>
                  <p className="text-gray-500 text-sm">
                    Can the proposed financing be supported by the project's financial structure?
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Financing consideration may include an assessment of:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {financialCapacityFactors.map((f) => (
                  <li key={f} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-cruise-500 mr-2 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4 text-sm">
                The objective is to establish whether the proposed financing requirement is consistent with the
                project's scale, financial capacity and commercial objectives.
              </p>
            </div>
          </div>

          {/* 03 SPV / SPE */}
          <div className="bg-cruise-900 rounded-xl p-8 md:p-12 text-white mb-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-cruise-500 mr-4">03</span>
              <div>
                <h3 className="text-2xl font-bold">SPV / SPE Structure</h3>
                <p className="text-cruise-200 text-sm">The foundation of the financing structure</p>
              </div>
            </div>
            <p className="text-cruise-100 mb-8 max-w-4xl">
              For transactions where an <strong className="text-white">SPV/SPE is required</strong>, establishing the
              appropriate Special Purpose Vehicle or Special Purpose Entity is a fundamental part of preparing the
              transaction for financing consideration. Depending on the transaction, it may be used to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {spvPurposes.map((p) => (
                <div key={p.title} className="bg-cruise-800/60 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-cruise-400 mb-2">{p.title}</h4>
                  <p className="text-sm text-cruise-100">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-cruise-400 mb-4">
              SPV/SPE = Structure + Control + Transparency
            </p>
            <p className="text-cruise-100 mb-4 max-w-4xl">
              The SPV/SPE is not simply another company registration. It is intended to provide the legal and
              operational framework through which the proposed investment transaction can be administered and
              monitored. Where required, satisfactory establishment and verification of the SPV/SPE forms part of the
              conditions that must be completed before a transaction can progress toward funding.
            </p>
            <p className="text-sm text-cruise-200 max-w-4xl">
              <strong className="text-white">Important:</strong> Establishment of an SPV/SPE does not constitute a
              guarantee of financing approval. Financing remains subject to due diligence, compliance, documentation,
              financing terms and approval by the relevant financing party.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 04 Due Diligence */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-cruise-200 mr-4">04</span>
                <div>
                  <h3 className="text-xl font-bold">Due Diligence &amp; Compliance</h3>
                  <p className="text-gray-500 text-sm">Transparency comes before funding</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Every serious financing transaction requires appropriate verification. Applicants may be required to
                provide:
              </p>
              <ul className="grid grid-cols-1 gap-y-2">
                {dueDiligenceDocs.map((d) => (
                  <li key={d} className="flex items-start text-sm text-gray-700">
                    <FileCheck className="h-4 w-4 text-cruise-500 mr-2 mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4 text-sm">
                Our objective is to ensure that the proposed transaction can be properly identified, documented and
                assessed before it proceeds further.
              </p>
            </div>

            {/* 05 Transaction Readiness */}
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-cruise-200 mr-4">05</span>
                <div>
                  <h3 className="text-xl font-bold">Transaction Readiness</h3>
                  <p className="text-gray-500 text-sm">Approval requires more than an application</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                A financing opportunity must be properly structured before it can move toward execution. A transaction
                may therefore progress through:
              </p>
              <ol className="space-y-4">
                {transactionSteps.map((step, i) => (
                  <li key={step} className="flex items-start">
                    <span className="h-8 w-8 rounded-full bg-cruise-50 text-cruise-600 font-semibold text-sm flex items-center justify-center mr-3 flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-700 pt-1.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Why structured financing */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose a Structured Financing Approach?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because serious capital requires serious preparation.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              A financing request supported by a properly structured company, identifiable project, documented use of
              funds and appropriate SPV/SPE framework can provide a clearer basis for professional financing
              assessment. Our approach is built around five principles:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
                <h3 className="text-lg font-bold text-cruise-600 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who can apply */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who Can Apply?</h2>
              <p className="text-gray-600 mb-6">
                Investment-financing opportunities may be considered for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {whoCanApply.map((w) => (
                  <li key={w} className="flex items-start text-sm text-gray-700">
                    <BadgeCheck className="h-4 w-4 text-cruise-500 mr-2 mt-0.5 flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600">
                Each application is considered according to its individual circumstances, financing requirement,
                jurisdiction, project structure and applicable eligibility criteria.
              </p>
            </div>
            <div className="bg-cruise-50 rounded-xl p-8 border border-cruise-100">
              <TrendingUp className="h-10 w-10 text-cruise-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Your Capital Requirement Deserves a Structure</h3>
              <p className="text-gray-700 mb-4">
                Whether you are developing a new project, expanding an existing business or seeking capital for a major
                investment opportunity, the first question is not simply:
              </p>
              <p className="text-lg font-semibold text-cruise-900 mb-4">"How much financing do you need?"</p>
              <p className="text-gray-700 mb-3">The more important questions are:</p>
              <ul className="space-y-2">
                {keyQuestions.map((q) => (
                  <li key={q} className="flex items-start text-sm text-gray-700">
                    <Scale className="h-4 w-4 text-cruise-500 mr-2 mt-0.5 flex-shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                This is where SPV/SPE structuring, due diligence and transaction preparation become critical.
              </p>
            </div>
          </div>
        </section>

        {/* Submit your project */}
        <section className="bg-cruise-900 rounded-xl p-8 md:p-12 text-white mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">Start Your Financing Application</h2>
              <p className="text-cruise-300 text-lg mb-6">
                Present your project. Build the structure. Prepare for financing consideration.
              </p>
              <p className="text-cruise-100 mb-6">
                <strong className="text-white">Cruise World International Mediation Financing Broker</strong> works
                with applicants to develop financing proposals into properly documented and structured transactions
                suitable for consideration by relevant financing parties.
              </p>
              <Button asChild size="lg" className="bg-cruise-500 hover:bg-cruise-600 text-white group">
                <Link to="/business-loan-application">
                  Submit Your Project for Initial Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="text-cruise-300 mt-6 font-medium">
                From project concept to financing structure: Assessment → Due Diligence → SPV/SPE → Structuring →
                Documentation → Financing Consideration → Funding
              </p>
            </div>
            <div className="bg-cruise-800/60 rounded-xl p-8">
              <ClipboardList className="h-10 w-10 text-cruise-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Required initial information may include:</h3>
              <ul className="space-y-2">
                {requiredInfo.map((r) => (
                  <li key={r} className="flex items-start text-sm text-cruise-100">
                    <CheckCircle className="h-4 w-4 text-cruise-400 mr-2 mt-0.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Brand line + disclaimer */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Cruise World International &amp; MAK Mediation Financing Broker</h2>
          <p className="text-lg text-cruise-600 font-medium mb-8">
            Structure the opportunity. Prepare the transaction. Access the right financing pathway.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left">
            <p className="text-sm text-gray-600">
              <strong className="text-gray-800">Disclaimer:</strong> All financing opportunities are subject to
              eligibility requirements, due diligence, KYC/AML and other compliance procedures, applicable laws and
              regulations, contractual documentation, financing conditions and the independent decision of the relevant
              financing party. Submission of an application, completion of an SPV/SPE structure or participation in the
              financing process does not guarantee approval, investment or disbursement. Applicants should obtain
              independent legal, tax and financial advice where appropriate.
            </p>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-cruise-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Present Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Submit your project for initial assessment and our team will guide you through structuring, due diligence
            and financing consideration.
          </p>
          <Button asChild size="lg" className="bg-white text-cruise-800 hover:bg-gray-100 group">
            <Link to="/business-loan-application">
              Start Your Application
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentFinancing;
