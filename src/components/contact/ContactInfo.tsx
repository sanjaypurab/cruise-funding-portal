import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
const ContactInfo: React.FC = () => {
  return <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-cruise-50 flex items-center justify-center mr-4">
            <Mail className="h-5 w-5 text-cruise-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Email Us</h3>
            <p className="text-gray-600 mb-1">General Inquiries:</p>
            <p className="text-cruise-600">info@cruisefinancegroupinterltd.com</p>
            <p className="text-gray-600 mt-2 mb-1">Funding Applications:</p>
            <p className="text-cruise-600">funding@cruisefinancegroupinterltd.com</p>
          </div>
        </div>
        
        
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-cruise-50 flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin className="h-5 w-5 text-cruise-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Oman Headquarters</h3>
            <address className="text-gray-600 not-italic">
              Cruise World International Limited (HO)<br />
              25 5th Floor Office 502 Dohat Al Adab St.<br />
              AL Khuwair, Muscat, Oman<br />
              Sultanate of Oman
            </address>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-cruise-50 flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin className="h-5 w-5 text-cruise-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Turkey Branch Office</h3>
            <address className="text-gray-600 not-italic">
              Kaptanpasa Mah. Piyalepasa Bulvari Blv.<br />
              Famas Plaza B Blok No: 77 Ic<br />
              Kapi No: 77/1 34384 Sisli Istanbul<br />
              Istanbul - People Republic Of Turkey
            </address>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-cruise-50 flex items-center justify-center mr-4">
            <Clock className="h-5 w-5 text-cruise-500" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Business Hours</h3>
            <p className="text-gray-600 mb-1">Monday - Friday:</p>
            <p className="text-cruise-600">9:00 AM - 5:00 PM</p>
            <p className="text-gray-600 mt-2 mb-1">Saturday:</p>
            <p className="text-cruise-600">9:00 AM - 1:00 PM (Oman office only)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-100">
        <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>;
};
export default ContactInfo;