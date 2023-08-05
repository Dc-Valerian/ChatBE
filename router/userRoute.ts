import e from "express";
import express, { Router } from "express";
import { createUser, deleteUser, getUsers, signinUser, updateUser } from "../controller/userController";

const router:Router= express.Router()

router.route("/get-user").get(getUsers)
router.route("/:userID/get-one-user").get(getUsers)
router.route("/:userID/update-user").get(updateUser)
router.route("/:userID/delete-user").get(deleteUser)
router.route("/create-user").get(createUser)
router.route("/sign-in-user").get(signinUser)


export default router