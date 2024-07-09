const mongoose=require("mongoose");
const mongooseURL="mongodb://localhost:27017/hotels";

mongoose.connect(mongooseURL);


const db=mongoose.connection;

db.on("connected",()=>{
    console.log("MongoDB connected");
});
db.on("error",(err)=>{
    console.log("Error Occured",err);
});
db.on("disconnected",()=>{
    console.log("MongoDB Disconnected");
});
module.exports=db;