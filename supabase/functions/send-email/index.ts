import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: "contact" | "application";
  name: string;
  email: string;
  subject?: string;
  message?: string;
  phone?: string;
  company?: string;
  fundingAmount?: string;
  fundingPurpose?: string;
  businessDescription?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received email request:", { type: data.type, email: data.email });

    let emailHtml: string;
    let emailSubject: string;

    if (data.type === "contact") {
      emailSubject = `New Contact Form Submission: ${data.subject || "General Inquiry"}`;
      emailHtml = `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || "N/A"}</p>
        <h2>Message:</h2>
        <p>${data.message || "No message provided"}</p>
      `;
    } else if (data.type === "application") {
      emailSubject = `New Funding Application: ${data.company}`;
      emailHtml = `
        <h1>New Funding Application</h1>
        <h2>Applicant Information</h2>
        <p><strong>Full Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <h2>Funding Details</h2>
        <p><strong>Amount Requested:</strong> ${data.fundingAmount || "N/A"}</p>
        <p><strong>Purpose:</strong> ${data.fundingPurpose || "N/A"}</p>
        <h2>Business Description</h2>
        <p>${data.businessDescription || "N/A"}</p>
      `;
    } else {
      throw new Error("Invalid email type");
    }

    // Send notification email to company
    const notificationResponse = await resend.emails.send({
      from: "Cruise World International <onboarding@resend.dev>",
      to: ["onboarding@resend.dev"], // Replace with actual company email
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to user
    const confirmationHtml = data.type === "contact"
      ? `
        <h1>Thank you for contacting us, ${data.name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Cruise World International Team</p>
      `
      : `
        <h1>Thank you for your funding application, ${data.name}!</h1>
        <p>We have received your application for ${data.company}.</p>
        <p>Our team will review your application and contact you within 2-3 business days.</p>
        <p>Best regards,<br>Cruise World International Team</p>
      `;

    const confirmationResponse = await resend.emails.send({
      from: "Cruise World International <onboarding@resend.dev>",
      to: [data.email],
      subject: data.type === "contact" 
        ? "We received your message!" 
        : "Your funding application has been received",
      html: confirmationHtml,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, notification: notificationResponse, confirmation: confirmationResponse }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
