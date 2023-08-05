import express, { Application,Request,Response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import user from "../router/userRoute"
import friend from "../router/friendRouter"
import chat from "../router/chatRouter"
import chatmessage from "../router/chatMessageRouter"


const url ="mongodb://0.0.0.0:27017/chat"

const app:Application= express()

const port:number = 3022;

app.use(cors())
app.use(express.json())

app.use("/api/v2",user)
app.use("/api/v2",friend)
app.use("/api/v2",chat)
app.use("/api/v2",chatmessage)

app.get("/",(req:Request,res:Response)=>{
try {
    res.status(200).json({
        message:"start",
    })
} catch (error) {
    res.status(404).json({
        message:"error",
    })
}
})

app.listen(port,()=>{
  mongoose.connect(url).then(()=>{
    console.log("server is connected 👻🚨🚀");
    
  })
})