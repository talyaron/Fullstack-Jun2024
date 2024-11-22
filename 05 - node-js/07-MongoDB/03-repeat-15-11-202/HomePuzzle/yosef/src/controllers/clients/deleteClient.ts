import { ClientModel } from "../../model/users/ClientModel";

export async function deleteClient (req:any, res:any){
    try {

        const deletedClient = await ClientModel.findByIdAndDelete(req.params.id);
        
        if (!deletedClient) {
            return res.status(404).json({ message: "Client not found" });
        }
        
        res.json(deletedClient);
    } catch (error){
        console.error("Error in deleting client:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}