import express from 'express';
import { addProduct } from '../../controllers/products/setProducts';
import { getMyProducts, getProducts } from '../../controllers/products/getProducts';
import { addToCart } from '../../controllers/purchase/setPurchase';



const router = express.Router();

// Get all comments
router.post("/add-to-cart", addToCart);



export default router;