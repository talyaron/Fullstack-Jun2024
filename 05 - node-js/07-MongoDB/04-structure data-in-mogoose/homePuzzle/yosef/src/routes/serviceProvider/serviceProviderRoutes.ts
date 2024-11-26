import express from "express";
import { addServiceProvider } from "../../controllers/serviceProvider/setServiceProviderCont";

const router = express.Router();

router.post("/add-service-provider", addServiceProvider);

export default router;