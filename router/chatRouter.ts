import e from "express";
import express, { Router } from "express";
import { createChat, getChat, getSpecificChat } from "../controller/chatController";

const router:Router= express.Router()

router.route("/:userID/:friendID/create-chat").post(createChat)
router.route("/:userID/get-chat").post(getChat)
router.route("/:userID/:friendID/get-a-chat").post(getSpecificChat)


export default router