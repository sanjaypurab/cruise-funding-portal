
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, GlobeIcon, BriefcaseIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cruise World International</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            A leading global investment firm providing capital solutions to ambitious businesses worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-cruise-50 text-cruise-700 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">Our Story</div>
            <h2 className="text-3xl font-bold mb-6">Building Financial Bridges Since 2008</h2>
            <p className="text-lg text-gray-600 mb-6">
              Cruise World International Limited was founded in 2008 with a vision to bridge the gap between ambitious businesses and capital resources. What began as a small consultancy in Muscat, Oman has grown into a respected international investment firm with a strong presence in the Middle East and Turkey.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our journey has been marked by a steadfast commitment to our core values: integrity, innovation, and impact. We believe that access to capital should be determined by the strength of ideas and execution, not by geography or connections.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80" 
                  alt="Ahmed Al-Maamari" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ahmed Al-Maamari</h3>
                <p className="text-cruise-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years of experience in finance and investments, Ahmed leads our global strategy and operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-cruise-600 mb-4">Chief Investment Officer</p>
                <p className="text-gray-600">
                  Sarah oversees our investment portfolios and leads our team of analysts in identifying new opportunities.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Mehmet Yilmaz" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Mehmet Yilmaz</h3>
                <p className="text-cruise-600 mb-4">Director, Turkish Operations</p>
                <p className="text-gray-600">
                  Mehmet manages our expansion in Turkey and surrounding regions, bringing local expertise to our global vision.
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
