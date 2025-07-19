import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected! DataBase HOST: ${connectionInstance.connection.host}`);

        /*
        mongoose.connect(...): Tries to establish a connection to MongoDB using a URI like mongodb://localhost:27017/mydatabase.

        Uses await so it waits until the connection is established.

        Returns a connection instance that includes details like .host, .port, etc.
        */

    } catch (error) {
        console.error("MONGODB Connection Error: ", error);
        process.exit(1);

        /*
        Catches any error (e.g., wrong credentials, no internet, DB server down).

        Logs the error for debugging.

        Exits the process using process.exit(1) to prevent the app from running without a DB.
        */
    }
};

export default connectDB;