import express from "express";
import { createServiceProvider } from "../../controllers/serviceProviders/setServiceProvider";

const router = express.Router();

// Route to create a service provider
router.post("/", createServiceProvider);

export default router;