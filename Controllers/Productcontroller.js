import mongoose from "mongoose";
import productmodel from "../model/Schema.js";


export const getproducts=async(req,res)=>{
   try {
    const productdetails=await productmodel.find();
 
    res.status(200).send(productdetails);
    console.log(productdetails);
    
   } catch (error) {
    res.status(500).send({error:"SomeThing went wrong"})
   }
   
} 


export const addproduct=async(req,res)=>{
    try {
       const product=await productmodel(req.body);
       await product.save();
       res.status(200).send({msg:"User added successfully"}); 
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
}


export default getproducts;