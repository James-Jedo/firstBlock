import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js";

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
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic
      });
      //send a welcome email to the user (not implemented here)
      
      
     }else{
         res.status(400).json({message:"Invalid user data"});
     }


    
   } catch (error) {
    console.error("Error during signup in signup controller:", error);
     res.status(500).json({message: "Server error during signup"});
   }
}