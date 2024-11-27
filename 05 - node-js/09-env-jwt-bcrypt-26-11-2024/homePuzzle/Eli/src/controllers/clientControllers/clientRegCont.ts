import { ClientModel } from "../../models/clientModel";
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import 'dotenv/config';

export const secret=process.env.JWT_SECRET||"4i3hjawdbhjo";
const saltRounds = parseInt(process.env.SALTROUNDS||"", 10);

export async function registerClient(req: any, res: any) {
  try {
    if(!saltRounds)
      throw new Error("no Salt!");
    const { name, phoneNumber, password } = req.body;
    if (!name || !phoneNumber || !password)
      throw new Error("one of the fields are empty");

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)

    await ClientModel.create({ name, phoneNumber, password:hashedPassword });
   return res.json({ message: "Account created sucssussfully" });
  } catch (error) {
    console.error("error",error);
    return res.status(500).send({ error: "something went wrong!" });
  }
}
