import express from 'express';
import { addAppointment } from '../../controllers/appointment/addAppointment';
import { GetAppointment } from '../../controllers/appointment/getAppointment';
import { getAvailableSlots } from '../../controllers/appointment/getSlots';


const router = express.Router();



router.post('/add-appointments', addAppointment);
router.get('/get-appointments', GetAppointment);
router.get('/slots', getAvailableSlots);

export default router;