import express from 'express';
import { addProduct } from '../../controllers/products/setProducts';
import { getMyProducts, getProducts } from '../../controllers/products/getProducts';
import { getUser } from '../../controllers/clients/middleware/getUser';
import { restrictToAdmin } from '../../controllers/clients/middleware/adminMidllware';



const router = express.Router();

// Get all comments


// Create a new comment
router.post('/add-product', restrictToAdmin, addProduct);
router.get('/my-products', getUser,getMyProducts).get('/get-all-products',getProducts);




export default router;