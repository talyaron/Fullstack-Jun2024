import express from 'express';
import { setAppointments } from '../../controllers/appointments/setAppointmentsCont';
import { getAllAppointments } from '../../controllers/appointments/getAllapointmentsCont';
import { getAppointmentsByUserId } from '../../controllers/appointments/getApointmentsByUserId';


const router = express.Router();

router.post("/add-appointments", setAppointments)
router.get("/get-Allappointments", getAllAppointments)
router.get("/get-appointmentsByUserId", getAppointmentsByUserId);

export default router