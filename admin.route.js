import express from "express";
import { singInPage, signInAction } from "../controller/admin.controller.js";
import {  dashboardPageAction } from "../controller/admin.controller.js";
import { verify } from "../middleware/auth.js";
const router = express.Router();
// http://localhost:3000/admin/sign-in
router.get("/sign-in",singInPage);
router.post("/sign-in",signInAction);
router.get("/dashboard",verify,dashboardPageAction)
export default router;