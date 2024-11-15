import express from "express";
import { addClient } from "../controllers/setClients";
const router = express.Router();


router.post("/add-client", addClient)
router.get("/get-user-details", addClient)

export default router