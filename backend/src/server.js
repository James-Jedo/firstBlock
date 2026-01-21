// const express =require ('express');
import express from 'express'; 
// const dotenv = require ('dotenv')
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.js"

import messageRoutes from "./routes/message.route.js"

dotenv.config()
const app = express();
const PORT = process.env.PORT


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, ()=>{
    console.log("Server started on port " + PORT);
});