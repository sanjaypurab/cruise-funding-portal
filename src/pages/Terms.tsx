
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last Updated: June 1, 2023</p>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Cruise World International Limited. Please read these Terms and Conditions carefully 
              before using our website or services. By accessing or using our services, you agree to be bound 
              by these Terms and Conditions.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            
            <p>
              By accessing or using our website, applying for funding, or using any of our services, you agree 
              to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions, 
              you may not access or use our services.
            </p>
            
            <h2>2. Services Description</h2>
            
            <p>
              Cruise World International Limited provides various funding solutions including business loans, 
              investment funding, venture capital, equity investments, and project financing. Our services are 
              subject to change without notice.
            </p>
            
            <h2>3. Application Process</h2>
            
            <p>
              Submission of an application does not guarantee approval for funding. All applications are subject 
              to review and evaluation based on our criteria. We reserve the right to request additional information 
              or documentation and to reject any application at our discretion.
            </p>
            
            <h2>4. User Responsibilities</h2>
            
            <p>You agree to:</p>
            
            <ul>
              <li>Provide accurate, current, and complete information in all submissions</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Promptly update any information that changes</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
            </ul>
            
            <h2>5. Intellectual Property</h2>
            
            <p>
              All content, features, and functionality on our website, including text, graphics, logos, icons, 
              images, and software, are the exclusive property of Cruise World International Limited and are 
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>6. Privacy Policy</h2>
            
            <p>
              Your use of our services is also governed by our Privacy Policy, which is incorporated into these 
              Terms and Conditions by reference. Please review our Privacy Policy to understand our practices.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            
            <p>
              To the maximum extent permitted by law, Cruise World International Limited shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages, including loss of profits, 
              data, or business opportunities, arising out of or in connection with your use of our services.
            </p>
            
            <h2>8. Disclaimers</h2>
            
            <p>
              Our services are provided on an "as is" and "as available" basis without any warranties of any kind. 
              We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
            </p>
            
            <h2>9. Indemnification</h2>
            
            <p>
              You agree to indemnify and hold harmless Cruise World International Limited, its affiliates, officers, 
              directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising 
              out of or in any way connected with your use of our services or violation of these Terms and Conditions.
            </p>
            
            <h2>10. Governing Law</h2>
            
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Oman, 
              without regard to its conflict of law provisions.
            </p>
            
            <h2>11. Changes to Terms and Conditions</h2>
            
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective 
              immediately upon posting the updated Terms and Conditions on our website. Your continued use of our 
              services after such changes constitutes your acceptance of the new Terms and Conditions.
            </p>
            
            <h2>12. Contact Information</h2>
            
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            
            <p>
              Cruise World International Limited<br />
              Financial District<br />
              Muscat, Oman<br />
              Email: legal@cruiseworld.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
