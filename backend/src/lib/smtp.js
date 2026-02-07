import nodemailer from "nodemailer";
import "dotenv/config";

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS; // Use an App Password for Gmail

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
});

export default transporter;
