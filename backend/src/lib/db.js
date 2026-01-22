import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
      const conn =  await mongoose.connect(process.env.MONGO_URI)
      console.log("MONGODB CONNECTED: ", conn.connection.host)
    }catch(error){
      console.error("Error connecting to MongoDB:", error);
        process.exit(1);
        // Exit the process with failure (1) And 0 meaning success
    }
}