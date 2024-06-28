import mongoose from "mongoose";

import 'dotenv/config'

const mongoUrl = process.env.mongo_url



 export const dbconnection = () => {
    mongoose.connect(process.env.mongo_url)
    .then(() => {
        console.log(`Database connected`)
    })
}