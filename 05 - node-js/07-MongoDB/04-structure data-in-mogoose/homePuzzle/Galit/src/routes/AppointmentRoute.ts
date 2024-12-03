import express from "express";
import { AppointmentModel } from "../model/appointment/appointmentModel";
import {addAppointment, getAppointmentById,editAppointment,deleteAppointment} from "../controllers/appointment/setAppointment";
import {getAllAppointments} from "../controllers/appointment/getAppointments";
const router = express.Router();

router.post("/add-appointment", addAppointment);
router.get("/:id", getAppointmentById);
router.delete("/delete-appointment", deleteAppointment);
router.put("/edit-appointment", editAppointment);

router.get("/all-appointments",getAllAppointments);

export default router;
