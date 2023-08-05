import e from "express";
import express, { Router } from "express";
import { beFriend, unFriend } from "../controller/friendController";

const router:Router= express.Router()

router.route("/:userID/:friendID/be-friend").post(beFriend)
router.route("/:userID/get-one-user").post(unFriend)


export default router