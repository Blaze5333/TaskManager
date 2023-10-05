const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    imageUrl:{type:String,default:'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w'},
    dob:String
})
schema.pre('save',async function(next){
    this.password=await bcrypt.hash(this.password,10)
    next()
})
const model=mongoose.model('UserDetails',schema)

module.exports=model
