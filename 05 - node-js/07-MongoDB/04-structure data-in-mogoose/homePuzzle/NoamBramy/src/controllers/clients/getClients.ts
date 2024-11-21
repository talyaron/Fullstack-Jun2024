import { ClientModel } from "../../model/clients/ClientModel";

export async function getClients(req: any, res: any) {
  try {
    const clients = await ClientModel.find();  
    res.status(200).json(clients); 
  } catch (error:any) {
    res.status(500).json({ message: "Error fetching clients", error: error.message });
  }
}