import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MongoDB_Url= process.env.MONGODB_URl;

const connectDB=async()=>{
    try {
        await mongoose.connect(MongoDB_Url);
        console.log("MongoDB is connected successfully");
    } catch (error) {
        console.log("Something went wrong while connecting to database: ",error);
    }
}

export default connectDB;