const express = require("express");
const router=express.Router();

const todoModel=require('../model/todoSchema.js')

router.post('/',async(req,res)=>{
    try{
        let {task,desc,date,category}=req.body;
        let date1=new Date();
        let active=true
        const details=await todoModel.create({task,desc,date1,date,category,active})
        res.status(200).send("Todos Successfully inserted")
    }
    catch(err){
        console.log('Client side error',err);
        res.status(400).send("Error inserting task");
    }
})

router.get('/',async(req,res)=>{
    try{
        const details=await todoModel.find();
        // console.log(details)
        if(!details){
            return res.send("No datas fetch from database")
        }
        else{
            res.status(201).json(details)
        }
    }
    catch(err){
        res.status(500).json({message : `Error : ${err}`})
    }
})
router.get('/:id',async(req,res)=>{
    try{
        
        let id=req.params.id;
        const details=await todoModel.findById(id)
        if(!details){
            return res.send("No datas fetch from database")
        }
        else{
            res.status(201).json(details)
        }
    }
    catch(err){
        res.status(500).json({message : `Error : ${err}`})
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id; 
        const details=req.body;
        const datas=await todoModel.findByIdAndUpdate(id,details,{new:true})
        res.status(200).json(datas)
    }
    catch(err){
        res.status(500).json({message : `Error : ${err}`})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        let id=req.params.id;
        const details=await todoModel.findByIdAndDelete(id)
        if(!details){
            console.log('No matching value to delete');  
        }
        let details1=await todoModel.find();
        res.status(200).send(details1)
    }
    catch(err){
        res.status(500).send("Server side error to delete")
    }
})

module.exports=router;