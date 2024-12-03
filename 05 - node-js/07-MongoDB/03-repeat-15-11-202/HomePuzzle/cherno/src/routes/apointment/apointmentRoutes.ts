import express from 'express';
import { addClient } from '../../controllers/client/setClients';
const router = express.Router();

router.post("/add-appointemt", addClient)
// router.get('get-user-details',getUserDeytails)

export default router