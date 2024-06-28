import express from "express";
import 'dotenv/config'
import policeApp from "./routes/policeapp.js";
import mongoose from "mongoose";
import { dbconnection } from "./config/db.js";

await mongoose.connect(process.env.mongo_url);


//Yhup you have an express app
const app = express();

app.use(express.json())


// Imported Applications
app.use(policeApp)
dbconnection();



//Server listening
app.listen(3003, () => {
    console.log("Server listening on port 3003");
});