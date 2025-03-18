
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from 'lucide-react';

const Faq: React.FC = () => {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is Cruise World International Limited?",
          answer: "Cruise World International Limited is a global investment firm headquartered in Oman with a branch in Turkey. We provide various funding solutions including business loans, investment funding, venture capital, equity investments, and project financing to businesses at different stages of growth."
        },
        {
          question: "What regions do you operate in?",
          answer: "While we are headquartered in Oman with a primary focus on the Middle East and Turkey, we operate globally and have funded businesses across Europe, Asia, and North America. Our international network allows us to connect businesses with the right funding sources regardless of location."
        },
        {
          question: "How long has Cruise World been in business?",
          answer: "Cruise World International Limited was founded in 2008. We have over 15 years of experience in the investment and funding industry, with a track record of supporting more than 300 businesses across multiple sectors."
        },
        {
          question: "What makes Cruise World different from other funding providers?",
          answer: "Our approach combines global reach with local expertise. We take the time to understand each business's unique needs and tailor our funding solutions accordingly. We also pride ourselves on our transparent process, competitive rates, and ongoing support beyond the initial investment."
        }
      ]
    },
    {
      title: "Application Process",
      items: [
        {
          question: "How do I apply for funding?",
          answer: "You can apply for funding by completing our online application form on our website. The form asks for basic information about your business, funding needs, and contact details. After submission, our team will review your application and contact you to discuss the next steps."
        },
        {
          question: "What information do I need to provide when applying?",
          answer: "Initially, we require basic information about your business, the amount of funding you're seeking, and the purpose of the funding. During the later stages of the application process, we'll need more detailed financial information, business plans, and relevant documentation to assess your application thoroughly."
        },
        {
          question: "How long does the application process take?",
          answer: "The initial review of your application typically takes 2-3 business days. The entire process from application to funding can take anywhere from 2 weeks to 2 months, depending on the complexity of your business, the funding amount, and the type of funding solution you're seeking."
        },
        {
          question: "Is there an application fee?",
          answer: "No, we do not charge application fees. Our revenue comes from successful funding arrangements, not from applicants seeking capital."
        }
      ]
    },
    {
      title: "Funding Options",
      items: [
        {
          question: "What types of funding do you offer?",
          answer: "We offer a range of funding solutions including business loans, investment funding, venture capital, equity investments, project financing, and international funding. Each option has different terms, requirements, and structures to suit various business needs."
        },
        {
          question: "What are the minimum and maximum funding amounts?",
          answer: "Our funding solutions range from $50,000 to $50 million, depending on the type of funding, your business profile, and specific needs. Business loans typically range from $50,000 to $10 million, while project financing can extend to $50 million or more for large-scale initiatives."
        },
        {
          question: "What industries do you fund?",
          answer: "We fund businesses across various industries including technology, healthcare, real estate, manufacturing, renewable energy, retail, hospitality, and more. While we are industry-agnostic, we particularly focus on sectors with strong growth potential and sustainable business models."
        },
        {
          question: "Do you offer specialized funding for startups?",
          answer: "Yes, our venture capital division specializes in funding startups with innovative business models and high growth potential. We offer seed to Series B funding, along with strategic guidance to help early-stage companies scale effectively."
        }
      ]
    },
    {
      title: "Terms and Requirements",
      items: [
        {
          question: "What interest rates do you charge?",
          answer: "Interest rates vary based on the funding solution, business profile, risk assessment, and market conditions. Business loans typically range from 6% to 15% annually. For specific information relevant to your situation, please contact our team after submitting an application."
        },
        {
          question: "What are the repayment terms?",
          answer: "Repayment terms are tailored to each business's cash flow and funding structure. Business loans may have terms ranging from 1 to 10 years. Equity investments and venture capital don't require repayment but instead involve ownership stakes. Project financing is typically structured around the project's lifecycle and revenue generation."
        },
        {
          question: "Do you require collateral for funding?",
          answer: "This depends on the funding type and risk assessment. Business loans may require collateral, particularly for larger amounts. Venture capital and equity investments typically don't require collateral but involve ownership stakes. Project financing often uses the project assets as security."
        },
        {
          question: "What documentation is required for the funding process?",
          answer: "Required documentation typically includes business registration documents, financial statements for the past 2-3 years, tax returns, bank statements, business plans, financial projections, and information about existing loans or investments. The specific requirements vary based on funding type and amount."
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our funding solutions and application process.
          </p>
        </div>
        
        {/* FAQ Categories */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        
        {/* Still Have Questions Section */}
        <div className="bg-cruise-50 rounded-xl p-8 border border-cruise-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, our team is happy to help. Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/application">Apply For Funding</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
