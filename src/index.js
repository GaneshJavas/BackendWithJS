// Import environment variable loader
import dotenv from "dotenv";

// Import MongoDB connection function
import connectDB from "./db/connections.js";

// Load env variables from a custom file named 'env'
// If you're using '.env', simply use: dotenv.config();
dotenv.config({
    path: './env'
});

// Connect to the database
connectDB();



// FIRST APPROACH
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

;(async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
        // Start Express Server
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port: ${process.env.PORT}`);
        });
        
        // Optional: Global Error Handler for the app
        app.on("error", (error) => {
            console.error("Express App Error: ", error);
            throw error;
        });
    
    } catch (error) {
        console.error("Failed to Start Server: ", error);
        throw error;
    }
})();
*/