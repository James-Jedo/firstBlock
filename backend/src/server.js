// const express =require ('express');
import express from 'express'; 
// const dotenv = require ('dotenv')

// const Path = require ('path')
import Path from "path"

import authRoutes from "./routes/auth.route.js"

import messageRoutes from "./routes/message.route.js"
import { connectDB } from './lib/db.js';
import {ENV} from "./lib/env.js";
// dotenv.config()
const app = express();
const __dirname = Path.resolve();
const PORT = ENV.PORT || 3000;
app.use(express.json());//(under req.body ) middleware to parse json bodies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
//make ready for production
if(ENV.NODE_ENV === "production"){
    app.use(express.static(Path.join(__dirname, "../frontend/dist")))
    // app.get("*", (req, res)=>{
    //     res.sendFile(Path.join(__dirname, "../frontend/dist/index.html"));
    // })
     app.get("/", (_, res)=>{
        res.sendFile(Path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}



app.listen(PORT, ()=>{
    console.log("Server started on port " + PORT);
    connectDB();
});