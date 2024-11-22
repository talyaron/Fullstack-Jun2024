import express from 'express';
import { addProduct } from '../../controllers/products/setProducts';



const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-product', addProduct);



export default router;