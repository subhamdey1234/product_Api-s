import mongoose from "mongoose";


const Schema=new mongoose.Schema({
  
    productname:{
        type:String,
        required:true,
        minlength:3
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        minlength:3
    },
    rating:{
        type:Number
    },
    warranty:{
        type:String
    }

});

const productmodel=mongoose.model("Productdetail",Schema);

export default productmodel;