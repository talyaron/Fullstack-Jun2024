import express from 'express';
import { addOrder } from '../../controllers/orders/addOrder';
import { getOrdersByClientId } from '../../controllers/orders/getOrdersByClientId';


const router = express.Router();

router.post('/add-order', addOrder)
router.get('/get-orders-by-client-id', getOrdersByClientId)

export default router;