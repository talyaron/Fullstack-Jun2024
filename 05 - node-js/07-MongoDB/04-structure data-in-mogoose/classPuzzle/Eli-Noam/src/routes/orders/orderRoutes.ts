import express from "express";
import { addOrder } from "../../controllers/orders/addOrderCont";
import { getOrders } from "../../controllers/orders/getOrderCont";

const router = express.Router();

router.post("/add-order",addOrder)
router.get("/get-orders",getOrders)


export default router;