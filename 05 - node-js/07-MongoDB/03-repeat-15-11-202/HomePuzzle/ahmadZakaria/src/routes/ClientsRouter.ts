import express from "express";
import { addClient, getClientById, editClient, deleteClient } from "../controller/client/setClient";
import { ClientModel } from "../model/clients/ClientsModel";

export const router = express.Router();

router.post("/add-client", addClient);
router.get("/:id",getClientById );
router.delete("/delete-client",deleteClient);
router.put("/edit-client", editClient);

router.get("/", async (req :any, res:any) => {
    try{
        const clients = await ClientModel.find();
        if(!clients || clients.length === 0 ){
            return res.status(404).send({error: "No client found"})
        }
        res.status(200).send(clients)
    }catch(error){
        console.error(error);
        res.status(500).send({error: "Server error"});
    }
}); 


export default router;
