import express from 'express';
import { addClient } from '../../controllers/clients/setClients';
const router = express.Router();

router.post("/add-client", addClient)
// router.get('get-user-details',getUserDeytails)

export default router