import { ClientModel } from "../../models/clientModel";

export async function deleteClient(req: any, res: any) {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res.status(400).json({ message: "Client ID is required" });
    }

    const deletedClient = await ClientModel.findByIdAndDelete(_id);

    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    console.log(`Client with ID ${_id} deleted successfully.`);
    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ message: "Server error" });
  }
}
