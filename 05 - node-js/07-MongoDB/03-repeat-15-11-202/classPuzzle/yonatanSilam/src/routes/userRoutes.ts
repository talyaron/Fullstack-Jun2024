import express from "express";
import { addUser } from "../controllers/userCont/addUserCont";
import { getUsers } from "../controllers/userCont/getUsersCont";

const router = express.Router();


router.post("/add-user", addUser)
router.get("/get-users", getUsers)

export default router