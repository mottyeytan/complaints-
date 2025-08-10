import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/complaints" 

export async function connectToMongo() {
    try {
        console.log(chalk.blue(`Attempting to connect to MongoDB at: ${MONGO_URI}`));
        await mongoose.connect(MONGO_URI, { dbName: "data" });
        console.log(chalk.green("Connected to MongoDB successfully"));

    } catch (error) {
        console.error(chalk.red("Error connecting to MongoDB:"), error.message);
        process.exit(1); 
    }
}

export async function closeMongoConnection() {
    try {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Error disconnecting from MongoDB", error);
    }
}


