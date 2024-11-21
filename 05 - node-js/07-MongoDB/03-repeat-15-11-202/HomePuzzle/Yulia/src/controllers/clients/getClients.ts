import { ClientModel } from "../../models/clientModel";

export async function getClient(req: any, res: any) {
  try {
    const client = await ClientModel.findById(req.query._id); 
    console.log("get client", client);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ error: "Failed to fetch client" });
  }
}

export async function getAllClients(req: any, res: any) {
  try {
    const clients = await ClientModel.find(); // get all clients from the database
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching all clients:", error);
    res.status(500).json({ message: "Failed to fetch all clients" });
  }
}