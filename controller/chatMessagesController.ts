import chatMessageModel from "../model/chatMessageModel";
import chatModel from "../model/chatModel";
import userModel from "../model/userModel";
import { Request,Response } from "express";


export const createChatMessage = async(req:Request,res:Response)=>{
    try {
        const {userID,chatID} = req.params;
        const {message} = req.body

        const chat = await chatMessageModel.create({
            userID,chatID,message
        })

   
         res.status(201).json({
            message:" Established chat Message",
            data:chat,
         })
        
    } catch (error) {
        res.status(404).json({
            message:"error"
        })
    }
}
export const getChatMessage = async(req:Request,res:Response)=>{
    try {
        const {chatID} = req.params;

        const chat = await chatMessageModel.find({
            chatID
        })

   
         res.status(201).json({
            message:" Get chat Message",
            data:chat,
         })
        
    } catch (error) {
        res.status(404).json({
            message:"error"
        })
    }
}