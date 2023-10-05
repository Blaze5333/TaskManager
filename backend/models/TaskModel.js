const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    title:String,
    note:String,
    date:Date,
    time:Date,
    color:String,
    userId:mongoose.Types.ObjectId,
    pending:{type:Number,default:1}
})
module.exports=mongoose.model("TaskDetails",schema)