import express from 'express';
import { addToCart } from '../../controllers/purchase/setPurchase';
import { getUserCartProducts, getUserPurchases } from '../../controllers/purchase/getPurchase';



const router = express.Router();

// Get all comments
router.post("/add-to-cart", addToCart);
router.post("/get-cart-products", getUserCartProducts);
router.post("/get-purchased-products", getUserPurchases);



export default router;