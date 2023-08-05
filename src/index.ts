import express, { Application,Request,Response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import user from "../router/userRoute"
import friend from "../router/friendRouter"
import chat from "../router/chatRouter"
import chatmessage from "../router/chatMessageRouter"

import http from "http"
import {Server} from "socket.io"

const url ="mongodb://0.0.0.0:27017/chat"

const app:Application= express()

const port:number = 3022;

const server = http.createServer(app)
const io = new Server(server,{
  cors:{
    origin:"*",
    methods:["Get","Post"],
  }
})

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


// Connecting to socket.io
io.on("connection",(socket)=>{
  console.log(socket);
  
})

server.listen(port,()=>{
  mongoose.connect(url).then(()=>{
    console.log("server is connected 👻🚨🚀");
    
  })
})