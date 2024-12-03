import express from 'express';
import { addServiceToProvider } from '../controllers/provider/addServiceToProvider';
import { createProvider } from '../controllers/provider/createProvider';
import { getProviders } from '../controllers/provider/getProviders';


const providerRouter = express.Router();

providerRouter.get('/get-providers', getProviders);
providerRouter.post('/add-service-to-provider', addServiceToProvider);
providerRouter.post('/create-provider', createProvider);

export default providerRouter;