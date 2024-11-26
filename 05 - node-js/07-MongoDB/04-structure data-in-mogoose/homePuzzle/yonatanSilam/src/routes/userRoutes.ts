import express from "express";
import { addUser } from "../controllers/userCont/addUserCont";
import { getUsers } from "../controllers/userCont/getUsersCont";
import { getUserByEmail, getUserById } from "../controllers/userCont/getUserCont";
import { updateName } from "../controllers/userCont/updateNameCont";
import { deleteUserById } from "../controllers/userCont/deleteUserCont";

const router = express.Router();


router.post("/add-user", addUser)
router.get("/get-users", getUsers)
router.get("/get-user", getUserById)
router.get("/get-user-by-email", getUserByEmail)
router.patch("/updateName", updateName)
router.delete("/delete-user", deleteUserById)



export default router