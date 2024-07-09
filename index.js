const express=require("express");
const db=require('./db');
const bodyParser=require("body-parser");
const Person=require('./models/person');
const personRoute=require('./routes/personRoute');
const app=express();
const menuItemsRoute=require('./routes/menuItemRoute');
require('dotenv').config();
const PORT=process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Welcome to our hotes");
})

app.use("/menu",menuItemsRoute);
app.use("/person",personRoute);




app.listen(PORT,()=> console.log("server is listening on port 3000"))
