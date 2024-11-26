import express from 'express';
import { addAppointment } from '../../controllers/apointment/setApointments';
const router = express.Router();

router.post("/add-client", addAppointment)

export default router