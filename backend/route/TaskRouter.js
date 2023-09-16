const express=require('express')
const route=express.Router()
const TaskModel=require('../models/TaskModel')
route.post('/:userId',async(req,res)=>{
    const userId=req.params.userId
    const {title,note,date,time}=req.body
    await TaskModel.create({title,note,date,time,userId})
    
})

module.exports=route