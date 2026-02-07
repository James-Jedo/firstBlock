// const express = require('express')
import express from "express";
import { signup, testEmail } from "../controllers/auth.controller.js";
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("SERVER RUNNING");
});
//old
// router.get("/signup", signup);
router.post("/signup", signup);

router.get("/logout", (req, res)=>{
    res.send("Logout endpoint");
});

router.get("/update", (req, res)=>{
    res.send("Update endpoint");
});

router.post("/test-email", testEmail);

export default router
