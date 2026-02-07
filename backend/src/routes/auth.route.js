// const express = require('express')
import express from "express";
import { signup, login, logout, testEmail } from "../controllers/auth.controller.js";
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("SERVER RUNNING");
});
//old
// router.get("/signup", signup);
router.post("/signup", signup);

router.post("/login",login);
router.post("/logout",logout);

router.get("/update", (req, res)=>{
    res.send("Update endpoint");
});



export default router
