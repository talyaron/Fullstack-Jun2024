import express from 'express';
import { addProduct } from '../../controllers/products/setProducts';
import { getMyProducts, getProducts } from '../../controllers/products/getProducts';



const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-product', addProduct);
router.get('/my-products',getMyProducts).get('/get-all-products',getProducts);




export default router;