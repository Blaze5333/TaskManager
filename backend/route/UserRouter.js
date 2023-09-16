const express=require('express')
const route=express.Router()
const User=require('../models/UserModel')
const bcrypt=require('bcryptjs')
route.post('/signup',async (req,res)=>{
  const {name,email,password,dob,imageUrl,phone}=req.body
  let r=0;
  User.find({email}).then(async(data)=>{
    console.log(data)
    if(data.length>0){
      res.send({
      error:1,
      msg:"User Already Exists"
    })
    }
    else{
      await User.create({name,email,password,dob,imageUrl,phone})
      res.send({
        error:0,
      })
    }
  }).catch((err)=>{
    console.log(err)
    res.send(err)
  })
})
route.post('/login',(req,res)=>{
  const {email}=req.body
  const {password}=req.body
  User.find({email}).then((data)=>{
    if(data.length===0){
         res.send({
          error:1
         })
    }
    else{
      bcrypt.compare(password,data[0].password).then((response)=>{
        if(response===true){
          res.send({error:0,id:data[0]._id})
        }
        else{
          res.send({
            error:1
           })
        }
      })
    }
  })
})
module.exports=route