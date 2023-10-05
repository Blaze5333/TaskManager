const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL).then(()=>{console.log('connected to mongodb')})
app.use(bodyParser.urlencoded({extended:true}))
const UserRouter=require('./route/UserRouter')
const TaskRouter=require('./route/TaskRouter')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({
        result:true
    })
})
app.use('/user',UserRouter)
app.use('/user/task',TaskRouter)
app.listen(3000,()=>{console.log('listening on port 3000')})