import express from "express";
import connectDB from "./Configs/dbConnection.js";
import userRoute from './Routes/userRoute.js';
import employeeRoute from './Routes/employeeRoute.js';

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

const app=express();

//body parser middleware for extracting data from req body
app.use(express.json());

//database connection
connectDB();

app.use('/user',userRoute);
app.use('/employee',employeeRoute);

app.listen(PORT,async()=>{
    console.log("Server is listening on "+ PORT);
})