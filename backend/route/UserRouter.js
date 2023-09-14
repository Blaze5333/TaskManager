const express=require('express')
const route=express.Router()
const User=require('../models/UserModel')
route.post('/',async (req,res)=>{
  const {name,email,password,dob,imageUrl,phone}=req.body
  let r=0;
  User.find({email}).then(async(data)=>{
    console.log(data)
    if(data.length>0){
      r=1
    }
  })
  if(r===1){
    res.send({
      msg:"User Exists"
    })
  }
  else
  {
  await User.create({name,email,password,dob,imageUrl,phone})
  res.send({
    'msg':"data saved"
  })
}
})

module.exports=route