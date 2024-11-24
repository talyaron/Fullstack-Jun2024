import express from 'express';
import { getMyAppointments } from '../controllers/providers/getMyAppointments';
const spvRouter = express.Router();

spvRouter.get('/appointments/:providerId', getMyAppointments);

export default spvRouter;