import express from "express";
import { getUser } from "../controllers/users/getUsersCont";
import { createUser } from "../controllers/users/setUsersCont";

const userRouter = express.Router();

userRouter.post("/login", getUser);
userRouter.post("/register", createUser);

export default userRouter;
