const mongoose=require("mongoose");
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

// comment added for testing
const Menu=mongoose.model("menu",menuSchema);
module.exports=Menu;
