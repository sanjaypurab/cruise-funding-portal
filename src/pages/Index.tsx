
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { ChevronRight, DollarSign, BarChart3, Briefcase, PiggyBank, Building, Globe } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Hero
        title="Global Investment Funding Solutions"
        subtitle="Connecting ambitious businesses with the capital they need to grow and thrive."
        ctaText="Apply For Funding"
        ctaLink="/application"
      />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-cruise-50 text-cruise-700 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tailored Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of investment and funding options to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Business Loans"
              description="Flexible business loans with competitive rates and tailored repayment terms to help your business grow."
              icon={<DollarSign className="h-6 w-6" />}
              link="/services#business-loans"
            />
            <ServiceCard
              title="Investment Funding"
              description="Access to capital from our global network of investors looking to support promising businesses."
              icon={<BarChart3 className="h-6 w-6" />}
              link="/services#investment-funding"
            />
            <ServiceCard
              title="Venture Capital"
              description="Early-stage investment for startups with high growth potential and innovative business models."
              icon={<Briefcase className="h-6 w-6" />}
              link="/services#venture-capital"
            />
            <ServiceCard
              title="Equity Investments"
              description="Long-term partnership through equity investments to provide capital and strategic support."
              icon={<PiggyBank className="h-6 w-6" />}
              link="/services#equity-investments"
            />
            <ServiceCard
              title="Project Financing"
              description="Specialized funding solutions for large-scale projects across various industries."
              icon={<Building className="h-6 w-6" />}
              link="/services#project-financing"
            />
            <ServiceCard
              title="International Funding"
              description="Cross-border investment solutions with expertise in Middle Eastern and Turkish markets."
              icon={<Globe className="h-6 w-6" />}
              link="/services#international-funding"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link to="/services">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-cruise-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-cruise-400">$500M+</p>
              <p className="text-lg">Funds Deployed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-cruise-400">300+</p>
              <p className="text-lg">Businesses Funded</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-cruise-400">15+</p>
              <p className="text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2 text-cruise-400">25+</p>
              <p className="text-lg">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Teaser Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1032&q=80" 
                  alt="Cruise World Office" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-cruise-500 text-white py-4 px-6 rounded-lg shadow-lg max-w-[240px] hidden md:block">
                <p className="font-medium">Headquartered in Oman with a branch in Turkey</p>
              </div>
            </div>
            
            <div className="lg:pl-6">
              <span className="inline-block px-3 py-1 bg-cruise-50 text-cruise-700 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Partner in Global Investment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Cruise World International Limited is a leading investment firm with a mission to connect businesses with the capital they need to grow and thrive in an increasingly competitive global market.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With offices in Oman and Turkey, we blend local expertise with international reach to provide unique funding solutions for businesses of all sizes.
              </p>
              <Button asChild className="bg-cruise-600 hover:bg-cruise-700 text-white group">
                <Link to="/about">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-cruise-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards securing the funding you need. Our team is ready to help you navigate the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-cruise-800 hover:bg-gray-100 group">
              <Link to="/application">
                Apply For Funding
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-cruise-800">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
