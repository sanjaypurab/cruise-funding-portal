
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cruise-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-cruise-400">Cruise</span>World
            </h3>
            <p className="text-gray-300 mb-4">
              Global investment funding solutions with a personal touch. Building financial futures together.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-cruise-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-cruise-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-cruise-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-cruise-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Business Loans</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Investment Funding</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Venture Capital</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Equity Investments</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Financial Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-cruise-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white">Oman Headquarters</p>
                  <address className="text-gray-300 not-italic">
                    Cruise World International Limited (HO)<br />
                    25 5th Floor Office 502 Dohat Al Adab St.<br />
                    AL Khuwair, Muscat, Oman<br />
                    Sultanate of Oman
                  </address>
                </div>
              </li>
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-cruise-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white">Turkey Branch Office</p>
                  <address className="text-gray-300 not-italic">
                    Kaptanpasa Mah. Piyalepasa Bulvari Blv.<br />
                    Famas Plaza B Blok No: 77 Ic<br />
                    Kapi No: 77/1 34384 Sisli Istanbul<br />
                    Istanbul - People Republic Of Turkey
                  </address>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cruise-400" />
                <p className="text-gray-300">+968 1234 5678</p>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-cruise-400" />
                <p className="text-gray-300">info@cruiseworld.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Cruise World International Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
