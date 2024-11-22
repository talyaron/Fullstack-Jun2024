import express from "express";
import { createAppointment } from "../controllers/appointmentControllers/appointmentCreateCont";

const router = express.Router();

router.post("/create-appointment",createAppointment);

export default router;
