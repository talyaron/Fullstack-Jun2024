import express from 'express';
import { addClient } from '../../controllers/clients/setClients';
import { getAllClients } from '../../controllers/clients/getAllClients';
import { deleteClient } from '../../controllers/clients/deleteClient';
import { editeClient } from '../../controllers/clients/editClient';


const router = express.Router();

router.post("/add-client", addClient)
router.get("/get-all-clients", getAllClients)
router.delete("/delete-client/:id", deleteClient)
router.patch("/edit-client/:id", editeClient)

export default router
