const express=require('express')
const route=express.Router()
const TaskModel=require('../models/TaskModel')
route.post('/:userId',async(req,res)=>{
    const userId=req.params.userId
    const {title,note,date,time,color}=req.body
     TaskModel.create({title,note,date,time,color,userId}).then(()=>{
       res.send({
        error:0
       }) 
     })
})
route.get('/:userId',(req,res)=>{
  try{
  const userId=req.params.userId
  TaskModel.find({userId}).then((data)=>{
    res.send(data)
  })
}
catch(err){
  res.send(err)
}
})
route.delete('/:id',(req,res)=>{
  const id=req.params.id
  TaskModel.deleteOne({_id:id}).then((data)=>{
    res.send(data)
  })
})
route.post('/update/:id',(req,res)=>{
  const id=req.params.id
  TaskModel.updateOne({_id:id},{pending:0}).then((data)=>{
    console.log(data)
    res.send(data)
  })
})
module.exports=route