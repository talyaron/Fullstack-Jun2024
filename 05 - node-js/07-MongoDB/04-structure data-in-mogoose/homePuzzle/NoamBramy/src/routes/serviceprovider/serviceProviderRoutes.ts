import express from 'express';
const router = express.Router();
import { addServiceProvider } from '../../controllers/serviceprovider/addSerivceProvider';
import { getServiceProvider } from '../../controllers/serviceprovider/getServiceProvider';

router.post("/add-service-provider", addServiceProvider)
router.get("/get-service-provider", getServiceProvider)
export default router