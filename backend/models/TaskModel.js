const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    title:String,
    note:String,
    date:String,
    time:String,
    userId:mongoose.Types.ObjectId
})
module.exports=mongoose.model("TaskDetails",schema)