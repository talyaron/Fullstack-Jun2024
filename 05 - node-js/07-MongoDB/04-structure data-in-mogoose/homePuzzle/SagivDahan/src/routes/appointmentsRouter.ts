import express from 'express';
import { createAppointment } from '../controllers/appointments/createAppointment';


const appointmentsRouter = express.Router();

appointmentsRouter.post('/create', createAppointment);

export default appointmentsRouter;