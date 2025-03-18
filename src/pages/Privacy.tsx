
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Button asChild variant="ghost" className="group mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: June 1, 2023</p>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Cruise World International Limited ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website, use our services, or apply for funding.
            </p>
            
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that 
              you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
            
            <h2>1. Information We Collect</h2>
            
            <p>We may collect the following types of information:</p>
            
            <h3>1.1 Personal Information</h3>
            
            <p>
              When you apply for funding, create an account, or contact us, we may collect personal information 
              such as:
            </p>
            
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Company information</li>
              <li>Financial information</li>
              <li>Identification documents</li>
            </ul>
            
            <h3>1.2 Automatically Collected Information</h3>
            
            <p>
              When you visit our website, we may automatically collect certain information about your device, 
              including:
            </p>
            
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times</li>
              <li>Pages viewed</li>
              <li>Referring website addresses</li>
            </ul>
            
            <h3>1.3 Cookies and Similar Technologies</h3>
            
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain 
              information. Cookies are files with a small amount of data that may include an anonymous unique 
              identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being 
              sent.
            </p>
            
            <h2>2. How We Use Your Information</h2>
            
            <p>We may use the information we collect for various purposes, including to:</p>
            
            <ul>
              <li>Process and evaluate funding applications</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized transactions</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>
            
            <h2>3. Information Sharing and Disclosure</h2>
            
            <p>We may share your information in the following situations:</p>
            
            <h3>3.1 With Your Consent</h3>
            
            <p>
              We may disclose your information with your consent or at your direction.
            </p>
            
            <h3>3.2 Service Providers</h3>
            
            <p>
              We may share your information with third-party vendors, service providers, contractors, or agents who 
              perform services for us or on our behalf and require access to such information to do that work.
            </p>
            
            <h3>3.3 Business Transfers</h3>
            
            <p>
              We may share or transfer your information in connection with, or during negotiations of, any merger, 
              sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
            
            <h3>3.4 Legal Requirements</h3>
            
            <p>
              We may disclose your information where we are legally required to do so in order to comply with applicable 
              law, governmental requests, a judicial proceeding, court order, or legal process.
            </p>
            
            <h2>4. Data Security</h2>
            
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the 
              security of any personal information we process. However, please be aware that no security measures are 
              perfect or impenetrable, and we cannot guarantee the security of your information.
            </p>
            
            <h2>5. International Data Transfers</h2>
            
            <p>
              Your information may be transferred to, and maintained on, computers located outside of your state, 
              province, country, or other governmental jurisdiction where the data protection laws may differ from 
              those in your jurisdiction.
            </p>
            
            <h2>6. Your Data Protection Rights</h2>
            
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the 
              right to access, correct, delete, or restrict the processing of your personal information.
            </p>
            
            <h2>7. Changes to This Privacy Policy</h2>
            
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <p>
              Cruise World International Limited<br />
              Financial District<br />
              Muscat, Oman<br />
              Email: privacy@cruiseworld.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
