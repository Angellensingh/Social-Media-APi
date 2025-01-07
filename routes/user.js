import express from "express";
import { createUser, loginUser, getUsers, getUserByID } from "../controllers/user.js";
const router = express.Router();

router.post("/create/user", createUser);
router.post("/login/user", loginUser);
router.get("/get/users", getUsers);
router.get("/get/user/:id", getUserByID);


export default router;
