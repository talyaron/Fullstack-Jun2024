import express from "express";
import { addClient } from "../controllers/setClients";
import { getUserDetails } from "../controllers/getUserData";
const router = express.Router();


router.post("/add-client", addClient)
router.get("/get-user-details", getUserDetails)

export default router