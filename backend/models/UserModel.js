const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    imageUrl:String,
    dob:String
})
schema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10)
    next()
})
const model=mongoose.model('UserDetails',schema)

module.exports=model
