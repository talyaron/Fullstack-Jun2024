import { ClientModel } from "../../models/clientModel";
import jwt from "jwt-simple";
import "dotenv/config";
import { secret } from "./clientRegCont";

export async function deleteClient(req: any, res: any) {
  try {
    const { user } = await req.cookies;
    console.log(user);
    //decode the token
    const decoded = jwt.decode(user, secret);
    console.log(decoded);
    const deletedUser = await ClientModel.findOne({ key: decoded._id });
    if (!deletedUser) {
      throw new Error("no such user");
    }
    console.log(deletedUser);
    const actuallyDeleted = await deletedUser.deleteOne();
    console.log(actuallyDeleted);
    res.json({ message: "user deleted" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
