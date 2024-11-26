import express from "express";
import { createAppointment } from "../../controllers/appointments/setAppointment";
import { getAllAppointments } from "../../controllers/appointments/getAllAppointments";
import { getAppointmentById } from "../../controllers/appointments/getAppointment";
import { updateAppointment } from "../../controllers/appointments/updateAppointment";
import { deleteAppointment } from "../../controllers/appointments/deleteAppointment";

const router = express.Router();

// Route to create an appointment
router.post("/", createAppointment);

// Route to get all appointments
router.get("/", getAllAppointments);

// Route to get an appointment by ID
router.get("/:id", getAppointmentById);

// Route to update an appointment by ID
router.patch("/:id", updateAppointment);

// Route to delete an appointment by ID
router.delete("/:id", deleteAppointment);

export default router;
