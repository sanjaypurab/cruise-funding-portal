
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CalendarIcon, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  fundingAmount: z.string().min(1, { message: "Please select a funding amount." }),
  fundingPurpose: z.string().min(10, { message: "Please provide at least 10 characters about your funding purpose." }),
  businessDescription: z.string().min(30, { message: "Please provide at least 30 characters about your business." }),
});

const Application: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      fundingAmount: "",
      fundingPurpose: "",
      businessDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "We've received your application and will contact you shortly.",
      });
    }, 1500);
  }

  if (submitted) {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Application Submitted Successfully</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for applying for funding with Cruise World International Limited. Our team will review your application and contact you shortly.
          </p>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">What happens next?</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Our team will review your application (typically within 2-3 business days)</li>
                <li>We'll reach out to you via email or phone to discuss your application further</li>
                <li>If approved, we'll arrange a meeting to discuss funding terms</li>
              </ol>
            </div>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Apply for Funding</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete the form below to start your funding application. Our team will review your information and get back to you shortly.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="fundingAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funding Amount Required</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a funding amount" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                        <SelectItem value="1m-5m">$1 million - $5 million</SelectItem>
                        <SelectItem value="5m+">Over $5 million</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="fundingPurpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose of Funding</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Briefly describe what you need the funding for" 
                        {...field} 
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="businessDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your business, its stage, and growth plans" 
                        {...field} 
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="mt-12 bg-cruise-50 rounded-xl p-6 sm:p-8 border border-cruise-100">
          <h3 className="text-lg font-semibold mb-4">What to expect after applying:</h3>
          <ul className="space-y-3">
            <li className="flex">
              <CalendarIcon className="h-5 w-5 text-cruise-600 mr-3 mt-0.5" />
              <span>Application review within 2-3 business days</span>
            </li>
            <li className="flex">
              <CalendarIcon className="h-5 w-5 text-cruise-600 mr-3 mt-0.5" />
              <span>Initial consultation call with our investment team</span>
            </li>
            <li className="flex">
              <CalendarIcon className="h-5 w-5 text-cruise-600 mr-3 mt-0.5" />
              <span>Documentation and due diligence process</span>
            </li>
            <li className="flex">
              <CalendarIcon className="h-5 w-5 text-cruise-600 mr-3 mt-0.5" />
              <span>Funding offer and agreement finalization</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Application;
