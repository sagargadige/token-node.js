import mongoose from "mongoose";

const tokenSchema=new mongoose.Schema({
    name:{
        
        type:String,
        required:true
    
    },
    email:{
        
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required:true
    }
})

const tokenModel=mongoose.model('tokens',tokenSchema);

export default tokenModel;