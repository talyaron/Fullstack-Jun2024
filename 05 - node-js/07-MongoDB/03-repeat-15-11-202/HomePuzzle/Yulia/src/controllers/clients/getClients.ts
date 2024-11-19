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
