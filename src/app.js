import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}));
// To handle json data
app.use(express.json({
    limit: "20kb"
}))
// To handle array data or object in object
app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
})) 
// To handle static data like images,etc giving the name public as folder
app.use(express.static("public"))

// To access the cookies coming from the browser and use it for CRED operation we use cookieParser
// Middleware to parse cookie request coming from the browser.
app.use(cookieParser())


// routes

import userRouter from "./routes/user.routes.js"


// declaration of routes
app.use("/users", userRouter)


// http://localhost:8000/users

export { app }