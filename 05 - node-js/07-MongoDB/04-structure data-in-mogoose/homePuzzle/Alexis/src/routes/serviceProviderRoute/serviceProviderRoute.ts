import express from 'express';
import { addServiceProvider } from '../../controllers/servicePrividers/setServiceProviders';

const router = express.Router();
router.post("/add-service", addServiceProvider)


export default router