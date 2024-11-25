import express from 'express';
import { addProduct } from '../../controllers/appointments/setAppointment';



const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-product', addProduct);



export default router;