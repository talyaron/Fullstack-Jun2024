import { ClientModel } from "../../models/clientModel";

export async function updateClient(req: any, res: any) {
  try {
    const { key, name, phoneNumber, password } = req.body;
    const clientByKey= await ClientModel.findOne({key});
    if (!clientByKey)
        throw new Error("no such client!");
    if (!name || !phoneNumber || !password)
      throw new Error("one of the fields are empty");
    await clientByKey.updateOne({ name, phoneNumber });
    if(clientByKey.password!==password)
    {
        await clientByKey.updateOne({ password});
    }
    res.json({ message: "Account created sucssussfully" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went wrong!" });
  }
}
