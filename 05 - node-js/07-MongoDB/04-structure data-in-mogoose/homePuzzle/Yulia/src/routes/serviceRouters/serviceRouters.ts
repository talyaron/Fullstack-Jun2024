import express from "express";
import { createService } from "../../controllers/services/setService";

const router = express.Router();

// Route to create a service
router.post("/", createService);

export default router;
