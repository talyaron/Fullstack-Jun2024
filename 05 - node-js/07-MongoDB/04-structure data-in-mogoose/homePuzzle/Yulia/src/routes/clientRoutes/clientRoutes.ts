import { deleteClient } from "../../controllers/clients/deleteClient";
import { getAllClients, getClient } from "../../controllers/clients/getClients";
import { addClient } from "../../controllers/clients/setClients";
import express from "express";
import { updateClient } from "../../controllers/clients/updateClient";

const clientRouter = express.Router();

clientRouter.post("/add-client", addClient);
clientRouter.get("/get-client", getClient);
clientRouter.get("/get-all-clients", getAllClients);
clientRouter.delete("/delete-client", deleteClient);
clientRouter.patch("/update-client/:id", updateClient);

export { clientRouter };