import express from "express";
import mongoose from "mongoose";
import getproducts from "../Controllers/Productcontroller.js";
import { addproduct } from "../Controllers/Productcontroller.js";
const productroute=express.Router();

//API's

//GET-------
productroute.get("/getproducts",getproducts);

//POST-----
productroute.post("/addproducts",addproduct);




export default productroute;