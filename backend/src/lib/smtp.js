import nodemailer from "nodemailer";
import {ENV} from "./env.js";

const user = ENV.GMAIL_USER;
const pass = ENV.GMAIL_PASS; // Use an App Password for Gmail

console.log("🔍 GMAIL_USER:", user ? "✅ Present" : "❌ Missing");
console.log("🔍 GMAIL_PASS:", pass ? "✅ Present" : "❌ Missing");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user,
    pass,
  },
});

transporter.verify().then(() => {
  console.log("✅ SMTP transporter verified");
}).catch((err) => {
  console.warn("⚠️ SMTP transporter verification failed:", err && err.message ? err.message : err);
  console.warn("");
  console.warn("💡 Common fixes:");
  console.warn("   1. If using Gmail with 2FA: Use an App Password, not your regular password");
  console.warn("   2. Generate App Password at: https://accounts.google.com/AppPasswords");
  console.warn("   3. Select 'Mail' and 'Windows Computer'");
  console.warn("   4. Copy the 16-char password and set in .env: GMAIL_PASS=xxxx xxxx xxxx xxxx");
  console.warn("   5. Restart the backend");
  console.warn("");
  console.warn("   Or allow Less Secure App Access:");
  console.warn("   1. Go to: https://myaccount.google.com/lesssecureapps");
  console.warn("   2. Enable 'Allow less secure app access'");
});


export default transporter;
