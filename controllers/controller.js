import tokenModel from "../models/tokenModel.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
//CREATE DATA
export const create=async(req,res)=>{
    try {
        const hashPassword=await bcrypt.hash(req.body.password,10);
        req.body.password=hashPassword;
        const data=await tokenModel.create(req.body);
        console.log(data)
        return res.json(data)
    } catch (error) {
        return res.json({error:error.message})   
    }
}

//CREATE TOKEN
export const login=async(req,res)=>{
    try {
        const {name,password}=req.body
        const data = await tokenModel.findOne({name});
        if(data){
            const isValid=await bcrypt.compare(password,data.password);
            if(isValid){
                const token= jwt.sign(
                    {name:data.name},
                    'secret',
                    {expiresIn:'1h'}
                )
                return res.json({
                    message:"token success",
                    token:token
                })
            }else{
                return res.json({message:"invalid password.."})
            }
        }else{
            return res.json({message:"User not Found.."})
        }
    } catch (error) {
        return res.json({error:error.message})
    }
}