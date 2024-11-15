import express from "express";
import { addClient } from "../../controllers/userController/setClients";
const router = express.Router();


router.post("/add-client", addClient)
router.get("/get-user-details", getUserDetails)

export default router