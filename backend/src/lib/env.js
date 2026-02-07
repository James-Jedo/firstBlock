import "dotenv/config";

// This file centralizes environment variable access and configuration.
// It can be imported wherever env variables are needed, ensuring consistent access and logging.    
export const ENV = {
PORT : process.env.PORT,
MONGO_URI: process.env.MONGO_URI,
JWT_SECRET: process.env.JWT_SECRET,
NODE_ENV: process.env.NODE_ENV,
CLIENT_URL: process.env.CLIENT_URL,
GMAIL_USER: process.env.GMAIL_USER,
GMAIL_PASS: process.env.GMAIL_PASS,
EMAIL_FROM: process.env.EMAIL_FROM,
EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME
} 