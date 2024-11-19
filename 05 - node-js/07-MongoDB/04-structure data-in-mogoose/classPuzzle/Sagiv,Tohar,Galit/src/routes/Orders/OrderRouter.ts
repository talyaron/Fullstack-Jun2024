import express from 'express';
import { createOrder } from '../../controllers/orders/createOrder';
import { getAllOrders } from '../../controllers/orders/getAllOrders';
const router = express.Router();

router.post('/create-order', createOrder);
router.get('/get-all-orders', getAllOrders);

export default router;