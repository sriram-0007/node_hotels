const mongoose=require("mongoose");
require('dotenv').config();

const mongooseURL=process.env.MONGODB_URL;
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