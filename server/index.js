import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./database/db.connect.js"

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

(async () => {
    await connectDB();
})()

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}...`);

})