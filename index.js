import express from "express";
import startconnection from "./config/Connection.js";
import productroute from "./Routes/ProductRouting.js";
const app=express();

//Middlewares--------------
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//-------------------



app.get("/",(req,res)=>{
    res.send("Server at work");
})


app.use("/products",productroute);

startconnection();


app.listen(4000,"localhost",()=>{
    console.log("http://localhost:4000");
    
})



