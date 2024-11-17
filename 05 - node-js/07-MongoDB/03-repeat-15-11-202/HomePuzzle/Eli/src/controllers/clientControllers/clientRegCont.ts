import { ClientModel } from "../../models/clientModel";

export async function registerClient(req: any, res: any) {
  try {
    const { name, phoneNumber, password } = req.body;
    if (!name || !phoneNumber || !password)
      throw new Error("one of the fields are empty");
    await ClientModel.create({ name, phoneNumber, password });
    res.json({ message: "Account created sucssussfully" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went wrong!" });
  }
}
