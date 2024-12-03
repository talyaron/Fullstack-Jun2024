import { ClientModel } from "../../models/clientModel";
import jwt from "jwt-simple";
import "dotenv/config";
import { secret } from "./clientRegCont";

export async function updateClient(req: any, res: any) {
  try {
    const {  name, phoneNumber, password } = req.body;
    const { user } =  req.cookies;
    console.log(user);
    //decode the token
    const decoded =await jwt.decode(user, secret);
    console.log(decoded);
    const clientByKey = await ClientModel.findOne({ key: decoded.id });
    if (!clientByKey)
        throw new Error("no such client!");
    if (!name || !phoneNumber || !password)
      throw new Error("one of the fields are empty");
    await clientByKey.updateOne({ name:name, phoneNumber:phoneNumber });
    //no password change for now
    // if(clientByKey.password!==password)
    // {
    //     await clientByKey.updateOne({ password});
    // }
    res.json({ message: "Account created sucssussfully" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went wrong!" });
  }
}
