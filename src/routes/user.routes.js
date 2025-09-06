import { Router } from "express";
import { registerUser, } from "../controllers/user.controller.js";

const router = Router();

// http://localhost:8000/users/

router.route("/register").post(registerUser)
// router.route("/login").post(loginUser)

export  default router;