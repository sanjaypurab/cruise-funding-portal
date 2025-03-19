
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare the template parameters
    const templateParams = {
      from_name: name,
      reply_to: email,
      subject: subject,
      message: message
    };
    
    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams,
        'YOUR_USER_ID'
      );
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
};

export default ContactForm;
