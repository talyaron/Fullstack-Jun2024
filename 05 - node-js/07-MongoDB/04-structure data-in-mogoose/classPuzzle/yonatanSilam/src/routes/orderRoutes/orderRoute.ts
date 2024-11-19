import express from 'express';
import { addOrder } from '../../controllers/orders/setOrderCont';
import { getOrderByClientId } from '../../controllers/orders/getOrderCont';
const router = express.Router();

router.post("/add-order", addOrder)
router.get("/get-order", getOrderByClientId)

export default router