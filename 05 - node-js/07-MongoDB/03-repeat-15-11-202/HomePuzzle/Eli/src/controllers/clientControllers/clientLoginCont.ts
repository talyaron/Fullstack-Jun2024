import { ClientModel } from "../../models/clientModel";

export async function loginClient(req: any, res: any) {
  try {
    const { phoneNumber, password } = req.body;

    const foundUser = await ClientModel.findOne({phoneNumber, password });
   // console.log(foundUser);
    if (!foundUser) {
      res.json({ message: "wrong password or phone number" });
      return;
    }
    const key=crypto.randomUUID();
    foundUser.key =key;
    await foundUser.save();
    res.json({ message: "Log in success !",key });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
