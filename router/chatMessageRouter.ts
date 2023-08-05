
import express, { Router } from "express";
import { createChatMessage, getChatMessage } from "../controller/chatMessagesController";

const router:Router= express.Router()

router.route("/:userID/:chatID/create-chat-message").post(createChatMessage)
router.route("/:userID/:chatID/get-chat-message").get(getChatMessage)


export default router