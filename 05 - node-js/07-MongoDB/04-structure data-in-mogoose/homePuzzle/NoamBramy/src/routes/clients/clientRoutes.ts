import express from 'express';
import { addClient } from '../../controllers/clients/setClients';
import { getClients } from '../../controllers/clients/getClients';
const router = express.Router();

router.post("/add-client", addClient)
router.get('/get-client', getClients)

export default router