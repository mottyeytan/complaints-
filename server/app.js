import express from "express";
import { connectToMongo } from "./mongoConnection.js";
import router from "./routes.js";
import chalk from "chalk";

const server = express();

//middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('client'));

// Routes
server.use("/api", router);


server.listen(3000, async () => {
    await connectToMongo();
    console.log(chalk.green("Server is running on port 3000"));
    console.log(chalk.blue("API available at: http://localhost:3000/api/complaints.html"));
});

