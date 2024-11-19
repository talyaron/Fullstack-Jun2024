import { getClient } from "../../controllers/clients/getClients";
import { addClient } from "../../controllers/clients/setClients";
import express from "express";

const clientRouter = express.Router();

clientRouter.post("/add-client", addClient);
clientRouter.get("/get-client", getClient);

export { clientRouter };