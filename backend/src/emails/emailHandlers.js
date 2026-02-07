// import { resendClient, sender } from "../lib/resend.js";
// import { createWelcomeTemplate } from "../emails/emailTemplates.js";


// export const sendWelcomeEmail = async(email, name, clientUrl) =>{
//     const {data, error} = await resendClient.emails.send({
//         from:`${sender.name} <${sender.email}>`,
//         to: email,
//         subject: "Welcome to ChatApp!",
//         html: createWelcomeTemplate(name, clientUrl)  
//     });

//     if(error){
//         console.error("Error sending welcome email:", error);
//         throw new Error("Failed to send welcome email");
//     }else{
//         console.log("Welcome email sent successfully:", data);
//     }
// }

import { sender } from "../lib/resend.js"; // kept for compatibility
import transporter from "../lib/smtp.js";
import { createWelcomeTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientUrl) => {
  console.log("🚀 sendWelcomeEmail function called with:", { email, name, clientUrl });
  try {
    if (!email || !name) {
      throw new Error("Email and name are required");
    }

    console.log("========================================");
    console.log("📧 EMAIL SENDING PROCESS STARTED");
    console.log("========================================");
    console.log("To:", email);
    console.log("Name:", name);
    console.log("Client URL:", clientUrl);
    console.log("From:", `${sender.name} <${sender.email}>`);

    const htmlTemplate = createWelcomeTemplate(name, clientUrl);
    
    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: `Welcome to ChatApp, ${name}! 🎉`,
      html: htmlTemplate,
    };

    console.log("Sending email via SMTP with payload...");
    const info = await transporter.sendMail(mailOptions);
    console.log("SMTP response:", info);

    if (!info || !info.messageId) {
      console.error("❌ Unexpected SMTP response:", info);
      throw new Error("Failed to send email via SMTP — no messageId returned");
    }

    console.log("✅ Email sent successfully via SMTP!");
    console.log("Email ID:", info.messageId);
    console.log("========================================");

    return { success: true, data: { id: info.messageId, info } };

  } catch (error) {
    console.error("❌ CRITICAL ERROR in sendWelcomeEmail:");
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.log("========================================");
    throw error;
  }
};