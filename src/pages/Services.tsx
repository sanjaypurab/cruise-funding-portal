
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  BarChart3, 
  Briefcase, 
  PiggyBank, 
  Building, 
  Globe,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of funding solutions tailored to meet the unique needs of businesses at every stage of growth.
          </p>
        </div>
        
        {/* Business Loans Section */}
        <div id="business-loans" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-6">
                <DollarSign className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Business Loans</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our business loans provide flexible financing options with competitive rates and tailored repayment terms to help your business address its immediate financial needs while setting the stage for future growth.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Flexible loan amounts from $50,000 to $10 million</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Competitive interest rates based on business profile</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Customized repayment schedules to match your cash flow</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Minimal paperwork and quick approval process</p>
                </div>
              </div>
              
              <Button asChild className="group">
                <Link to="/application">
                  Apply for a Business Loan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1622782914767-404fb9ab3437?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80" 
                alt="Business Loans" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Investment Funding Section */}
        <div id="investment-funding" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
                alt="Investment Funding" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Investment Funding</h2>
              <p className="text-lg text-gray-600 mb-6">
                Access capital from our global network of investors who are looking to support promising businesses with strong growth potential. We connect you with the right investors for your industry and stage.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Access to a diverse network of international investors</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Tailored investment structures to meet your needs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Strategic advisory to prepare your business for investment</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Ongoing support throughout the investment process</p>
                </div>
              </div>
              
              <Button asChild className="group">
                <Link to="/application">
                  Explore Investment Funding
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Venture Capital Section */}
        <div id="venture-capital" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Venture Capital</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide early-stage investment for startups with high growth potential and innovative business models. Our venture capital funding comes with strategic guidance to help you scale rapidly.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Seed to Series B funding for promising startups</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Industry expertise in technology, healthcare, and clean energy</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Mentorship from successful entrepreneurs in our network</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cruise-500 mr-3 mt-1" />
                  <p>Access to our global network for business development</p>
                </div>
              </div>
              
              <Button asChild className="group">
                <Link to="/application">
                  Pitch Your Startup
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091878591-4f0714c6f36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Venture Capital" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div id="equity-investments" className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-5">
              <PiggyBank className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Equity Investments</h3>
            <p className="text-gray-600 mb-4">
              Long-term partnership through equity investments to provide capital and strategic support for established businesses looking to expand.
            </p>
            <Link 
              to="/application" 
              className="inline-flex items-center text-cruise-600 font-medium hover:text-cruise-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div id="project-financing" className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-5">
              <Building className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Financing</h3>
            <p className="text-gray-600 mb-4">
              Specialized funding solutions for large-scale projects across various industries, including infrastructure, real estate, and energy.
            </p>
            <Link 
              to="/application" 
              className="inline-flex items-center text-cruise-600 font-medium hover:text-cruise-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div id="international-funding" className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cruise-50 text-cruise-500 mb-5">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">International Funding</h3>
            <p className="text-gray-600 mb-4">
              Cross-border investment solutions with expertise in Middle Eastern and Turkish markets, helping businesses expand internationally.
            </p>
            <Link 
              to="/application" 
              className="inline-flex items-center text-cruise-600 font-medium hover:text-cruise-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-cruise-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Funding?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards securing the capital your business needs to grow. Apply today and our team will guide you through the process.
          </p>
          <Button asChild size="lg" className="bg-white text-cruise-800 hover:bg-gray-100 group">
            <Link to="/application">
              Start Your Application
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
