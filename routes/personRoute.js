const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

router.post('/',async (req,res)=>{
    try{
        const data=req.body;
        const newPerson=new Person(data);

        const response=await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})

router.get('/',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log("data Fetched");

        
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
})
module.exports=router;