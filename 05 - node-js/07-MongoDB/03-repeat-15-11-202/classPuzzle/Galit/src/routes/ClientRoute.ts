import express from 'express';
import { addClient } from '../controllers/users/setClients';
const router = express.Router();

router.post ("/add-client", addClient)

export default router;