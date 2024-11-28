import express from 'express';
import { addClient, login, register } from '../../controllers/clients/setClients';
const router = express.Router();

router.post("/add-client", addClient).post("/register", register).post("/login", login);


export default router