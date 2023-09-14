const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    imageUrl:String,
    dob:String
})
const User=mongoose.model('UserDetails',schema)
module.exports=User