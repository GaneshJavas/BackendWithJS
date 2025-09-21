import { Router } from "express";
import { registerUser, } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

// http://localhost:8000/users/

router.route("/register").post(upload.fields([
    {
        name : "displayPic",
        maxCount : 1
    },
    {
        name : "coverPic",
        maxCount : 1
    }
]),registerUser)
// router.route("/login").post(loginUser)

export  default router;