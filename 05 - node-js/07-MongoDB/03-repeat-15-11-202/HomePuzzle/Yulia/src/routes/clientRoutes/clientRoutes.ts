import { addClient } from "../../controllers/clients/setClients";
import express from "express";

const clientRouter = express.Router();

clientRouter.post("/add-client", addClient);

export { clientRouter };