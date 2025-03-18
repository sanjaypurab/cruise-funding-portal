
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our funding solutions? Our team is here to help you navigate the process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-cruise-50 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-cruise-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-1">General Inquiries:</p>
                  <p className="text-cruise-600">info@cruiseworld.com</p>
                  <p className="text-gray-600 mt-2 mb-1">Funding Applications:</p>
                  <p className="text-cruise-600">funding@cruiseworld.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-cruise-50 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-cruise-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Oman Headquarters:</p>
                  <p className="text-cruise-600">+968 1234 5678</p>
                  <p className="text-gray-600 mt-2 mb-1">Turkey Office:</p>
                  <p className="text-cruise-600">+90 212 345 6789</p>
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
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting Cruise World International. We've received your message and will get back to you shortly.
                </p>
                <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29386.07574919822!2d58.54042244348924!3d23.588689377106304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f423565f1661%3A0xae93694e5b497646!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1655932350411!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
