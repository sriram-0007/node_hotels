const express=require("express");
const db=require('./db');
const bodyParser=require("body-parser");
const Person=require('./models/person');

const app=express();
const menuItemsRoute=require('./routes/menuItemRoute');



app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Welcome to our hotes");
})

app.use("/menu",menuItemsRoute);




app.listen(3000,()=> console.log("server is listening on port 3000"))
