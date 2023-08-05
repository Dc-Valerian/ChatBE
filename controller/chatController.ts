import { Request,Response } from "express";
import userModel from "../model/userModel";
import chatModel from "../model/chatModel";


export const createChat = async(req:Request,res:Response)=>{
    try {
        const {userID,friendID} = req.params;

        const friend:any = await userModel.findById(friendID)
        const user:any = await userModel.findById(userID)

      const checkUser =  user.friends.some((el:string)=>el === friendID);
      const checkFriend =  friend.friends.some((el:string)=>el === userID);

        if(checkUser && checkFriend){
       const chat = await chatModel.create({
        member:[userID,friendID],
       })
         res.status(201).json({
            message:"chat Established",
            data:chat,
         })
        }
    } catch (error) {
        res.status(404).json({
            message:"error"
        })
    }
}
export const getChat = async(req:Request,res:Response)=>{
    try {
        const {userID,friendID} = req.params;

        const chat = await chatModel.find({
            member:{
                $all:[userID]
            }
          })
      
         res.status(201).json({
            message:"get chat Established",
            data:chat,
         })
        
    } catch (error) {
        res.status(404).json({
            message:"error"
        })
    }
}
export const getSpecificChat = async(req:Request,res:Response)=>{
    try {
        const {userID,friendID} = req.params;

        const chat = await chatModel.findOne({
            member:{
                $in:[userID,friendID]
            }
          })
      
         res.status(201).json({
            message:"specific chat Established",
            data:chat,
         })
        
    } catch (error) {
        res.status(404).json({
            message:"error"
        })
    }
}