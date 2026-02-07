import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js";
import "dotenv/config";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";


export const signup = async  (req, res)=>{
   const {fullName ,email , password } = req.body;
   try {
     if(!fullName || !email || !password)  {
        return res.status(400).json({meaage:"Kindly provide all required fields"});
     }
     if(password.length < 6){
        return res.status(400).json({meaage:"Password must be at least 6 characters long"});
     }

     //check for valid email format
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Please provide a valid email address" });
     }
//  if(!email.includes("@")){
    //     return res.status(400).json({meaage:"Please provide a valid email address"});
    //  }
     const user = await User.findOne({email: email.toLowerCase()})
     if(user) return res.status(400).json({message:"User already exists with this email"});
     
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);
     const newUser = new User({
        fullName,
        email: email.toLowerCase(),
        password: hashedPassword
     });

     if(newUser){
      // BEFORE CR
      //  generate a token (JWT) for the user (not implemented here)
      // generateToken(newUser._id,res);
      // await newUser.save();

      //AFTER CR  
 const savedUser = await newUser.save();
   generateToken(savedUser._id,res);

   // Send welcome email before responding
   try {
     await sendWelcomeEmail(savedUser.email, savedUser.fullName, process.env.CLIENT_URL);
   } catch (error) {
     console.error("Error sending welcome email:", error);
     // Continue with response even if email fails
   }

   return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic
      })
      //send a welcome email to the user (not implemented here)
      
      // try {
      //   await sendWelcomeEmail(savedUser.email, savedUser.fullName, process.env.CLIENT_URL);
      // } catch (error) {
      //   console.error("Error sending welcome email:", error);
      // }
      
     }else{
         res.status(400).json({message:"Invalid user data"});
     }


    
   } catch (error) {
    console.error("Error during signup in signup controller:", error);
     res.status(500).json({message: "Server error during signup"});
   }
}

export const testEmail = async (req, res) => {
  console.log("🧪 TEST-EMAIL ENDPOINT HIT");
  console.log("Request body:", req.body);
   const { fullName, email } = req.body;
   try {
      if (!fullName || !email) {
         return res.status(400).json({ message: "fullName and email are required in the body" });
      }

      // Trigger the welcome email and return the provider response
      try {
         const result = await sendWelcomeEmail(email.toLowerCase(), fullName, process.env.CLIENT_URL);
         return res.status(200).json({ success: true, result });
      } catch (err) {
         console.error("Error sending test welcome email:", err);
         return res.status(500).json({ success: false, error: err.message || String(err) });
      }
   } catch (error) {
      console.error("Error in testEmail endpoint:", error);
      return res.status(500).json({ message: "Server error" });
   }
}