import express from 'express';
import { addService } from '../controllers/service/addService';
import { getServices } from '../controllers/service/getServices';


const serviceRouter = express.Router();

serviceRouter.post('/api/add-service', addService);
serviceRouter.get('/api/get-services', getServices);




export default serviceRouter;