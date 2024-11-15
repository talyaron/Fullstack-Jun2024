import express from 'express';
import { createUserCont } from '../controllers/createUserCont';
import { getUserCont } from '../controllers/getUserCont';
import { deleteUserCont } from '../controllers/deleteUserCont';
import { updateUserCont } from '../controllers/updateUserCont';
export const router = express.Router()

router.post("/send-user", createUserCont);
router.get("/get-user", getUserCont);
router.delete("/delete-user", deleteUserCont);
router.patch("/update-user", updateUserCont)

export const userRoutes = router;