import mongoose from "mongoose";

const url="mongodb://localhost:27017/mydatabase";

const startconnection=async()=>{
try {
 await mongoose.connect(url).then(()=>{
    console.log("Database connected successfully...");
    
 }).catch((err)=>{console.log(err);
 })

} catch (error) {
    console.log(error);
}
}

export default startconnection;