const mongoose=require("mongoose");
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        tyep:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,

    },
    salary:{
        type:Number,
        required:true
    }

});
const Person=mongoose.model('person',personSchema);
module.exports=Person;