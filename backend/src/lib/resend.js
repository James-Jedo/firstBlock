import {ENV} from "./env.js";
// Resend configuration commented out so SMTP (Gmail) can be used for testing.
// import { Resend } from "resend";
// import "dotenv/config";
//
// // Initialize Resend client using API key from env
// const apiKey = process.env.RESEND_API_KEY;
// console.log("🔍 RESEND_API_KEY:", apiKey ? "✅ Present" : "❌ Missing");
//
// export const resendClient = new Resend(apiKey);
//
// export const sender = {
//   email: process.env.EMAIL_FROM || "jcubayzel@gmail.com",
//   name: process.env.EMAIL_FROM_NAME || "Jaytech Chat App",
// };
//
// if (!apiKey) {
//   console.warn("⚠️  Resend API key is not configured. Email sending will fail until RESEND_API_KEY is set.");
// }
//
// console.log("📧 Sender configured:", sender);

// Export a `sender` from env for compatibility with existing email handlers.
export const sender = {
  email: ENV.EMAIL_FROM || ENV.GMAIL_USER || "jcubayzel@gmail.com",
  name: ENV.EMAIL_FROM_NAME || "Jaytech Chat App",
};

console.log("📧 Sender configured for SMTP (from env):", sender);