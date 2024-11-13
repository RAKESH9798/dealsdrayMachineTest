import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default: Date.now
    },
});

export default mongoose.model("Employee",employeeSchema);