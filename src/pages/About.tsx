
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, GlobeIcon, BriefcaseIcon, UsersIcon, TrendingUpIcon, Scale, FileCheck, Network, Landmark } from 'lucide-react';
import ceoPhoto from '@/assets/ceo-ahmed-murad-al-balushi.jpg';
import cioPhoto from '@/assets/victoria-b-al-khan.jpg';
import directorPhoto from '@/assets/metin-ahmet-ozdemir.jpg';

const About: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cruise World International</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Connecting global opportunity with capital through structure, transparency and international collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-cruise-50 text-cruise-700 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">Our Story</div>
            <h2 className="text-3xl font-bold mb-6">Building Financial Bridges Since 2008</h2>
            <p className="text-lg text-gray-600 mb-6">
              Cruise World International Limited, together with its MAK Mediation Financing Broker platform, was established to connect credible businesses, strategic projects, investors and international sources of capital through structured and professionally coordinated financial solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Since 2008, our journey has evolved from consultancy and business facilitation into a broader international platform serving clients and partners across the GCC, Middle East, Türkiye, Europe, Asia, the Americas, Africa and selected international markets.
            </p>
            <Button asChild className="mt-4">
              <Link to="/contact">
                Contact Our Team
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Cruise World Office" 
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white py-3 px-5 rounded-lg shadow-lg max-w-[240px] hidden md:block">
              <p className="font-medium text-cruise-700">Founded in Oman, expanding globally</p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-cruise-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-sm font-medium text-cruise-700">Our Purpose</span>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Creating a Structured Bridge Between Opportunity and Capital</h2>
            <p className="text-lg leading-8 text-gray-600">A compelling idea alone is not enough. Appropriate capital requires sound financial and commercial fundamentals, professional documentation, legal and corporate structure, transparent due diligence, qualified counterparties and strong transaction coordination. Our purpose is to bring these elements together.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Landmark, title: 'Capital Facilitation', text: 'Private and strategic investment, equity, venture capital, project finance, business financing and international funding.' },
              { icon: FileCheck, title: 'Finance-Ready Preparation', text: 'We help shape clearly documented opportunities suitable for consideration by appropriate capital sources.' },
              { icon: Scale, title: 'Due Diligence', text: 'Corporate, ownership, management, financial, legal, beneficial-ownership and KYC/AML information may be reviewed.' },
              { icon: Network, title: 'Transaction Coordination', text: 'We coordinate applicants, investors, institutions, advisers and strategic partners through one professional framework.' },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="border border-gray-100 bg-white p-6 shadow-sm">
                <Icon className="mb-4 h-7 w-7 text-cruise-600" />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cruise-600">Our Approach</p>
            <h2 className="mb-5 text-3xl font-bold">Structure Before Capital</h2>
            <p className="mb-6 text-lg leading-8 text-gray-600">Every serious opportunity requires appropriate consideration of the applicant, project, ownership, financial position, purpose, legal framework and risk profile. Where appropriate, an SPV or SPE may form part of the structure, subject to the transaction, jurisdiction, legal advisers and counterparties.</p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-cruise-700">
              {['Assessment', 'Documentation', 'Due Diligence', 'Structuring', 'Capital Facilitation', 'Transaction Coordination'].map((item, index, items) => (
                <React.Fragment key={item}><span>{item}</span>{index < items.length - 1 && <ChevronRight className="h-4 w-4" />}</React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cruise-600">International Perspective</p>
            <h2 className="mb-5 text-3xl font-bold">Capital Without Borders</h2>
            <p className="text-lg leading-8 text-gray-600">A viable project may originate in one country, require capital from another and involve advisers, financial institutions and a transaction vehicle across several markets. We coordinate across commercial environments while respecting each jurisdiction’s regulatory framework, legal structure and compliance obligations.</p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <div className="bg-cruise-950 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-cruise-900 text-cruise-400 rounded-full text-sm font-medium mb-4">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Our Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide our decisions and shape our approach to every investment opportunity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-cruise-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cruise-800 rounded-full flex items-center justify-center mb-6">
                <GlobeIcon className="h-6 w-6 text-cruise-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Perspective</h3>
              <p className="text-gray-300">
                We leverage our international experience and network to provide unique insights and opportunities.
              </p>
            </div>
            <div className="bg-cruise-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cruise-800 rounded-full flex items-center justify-center mb-6">
                <FileCheck className="h-6 w-6 text-cruise-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p className="text-gray-300">Disciplined preparation, clear communication, appropriate documentation and careful coordination.</p>
            </div>
            
            <div className="bg-cruise-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cruise-800 rounded-full flex items-center justify-center mb-6">
                <BriefcaseIcon className="h-6 w-6 text-cruise-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Investor Integrity</h3>
              <p className="text-gray-300">
                We maintain the highest standards of transparency and accountability in all our dealings.
              </p>
            </div>
            
            <div className="bg-cruise-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cruise-800 rounded-full flex items-center justify-center mb-6">
                <UsersIcon className="h-6 w-6 text-cruise-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Partnership Focus</h3>
              <p className="text-gray-300">
                We view our investments as partnerships, working closely with businesses to ensure mutual success.
              </p>
            </div>
            
            <div className="bg-cruise-900 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cruise-800 rounded-full flex items-center justify-center mb-6">
                <TrendingUpIcon className="h-6 w-6 text-cruise-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Long-term Growth</h3>
              <p className="text-gray-300">
                We focus on sustainable growth, not short-term gains, building value that lasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="border-y border-gray-100 bg-cruise-50 py-20">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cruise-600">Our Vision</p>
            <h2 className="mb-4 text-3xl font-bold">A Trusted International Bridge</h2>
            <p className="text-lg leading-8 text-gray-600">To be a trusted bridge between credible opportunity and responsible capital—where businesses receive structured guidance and investors engage with properly prepared opportunities.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-cruise-600">Our Mission</p>
            <h2 className="mb-4 text-3xl font-bold">Connecting Opportunity With Capital</h2>
            <p className="text-lg leading-8 text-gray-600">To connect opportunity with capital through professionalism, structure, transparency and international collaboration—building partnerships and creating financial bridges.</p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-cruise-50 text-cruise-700 rounded-full text-sm font-medium mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Executive Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to finding and funding exceptional businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={ceoPhoto} 
                  alt="Dr. Ahmed Murad Al Balushi" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Ahmed Murad Al Balushi</h3>
                <p className="text-cruise-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years of experience in finance and investments, Dr. Al Balushi leads our global strategy and operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cioPhoto} 
                  alt="Mrs. Victoria B. Al Khan" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mrs. Victoria B. Al Khan</h3>
                <p className="text-cruise-600 mb-4">Chief Investment Officer</p>
                <p className="text-gray-600">
                  Mrs. Victoria oversees our investment portfolios and leads our team of analysts in identifying new opportunities.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={directorPhoto} 
                  alt="Mr. Metin Ahmet ÖZDEMİR" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mr. Metin Ahmet ÖZDEMİR</h3>
                <p className="text-cruise-600 mb-4">Director, Turkish Operations</p>
                <p className="text-gray-600">
                  ÖZDEMİR manages our expansion in Turkey and surrounding regions, bringing local expertise to our global vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-cruise-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're seeking funding or looking to discuss potential investment opportunities, our team is ready to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/application">Apply For Funding</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
