import { ClientModel } from "../../models/clientModel";

export async function updateClient(req: any, res: any) {
  try {
    const { id } = req.params; // get client id from the request parameters
    const updateData = req.body; // get updated client data from the request body

    // client update
    const updatedClient = await ClientModel.findByIdAndUpdate(id, updateData, {
      new: true, // rerturns the updated document
      runValidators: true, // run model validations
    });

    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json(updatedClient); // return updated client
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({ message: "Failed to update client" });
  }
}
