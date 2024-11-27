import { ClientModel } from "../../models/clientModel";
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const secret=process.env.JWT_SECRET||"4i3hjawdbhjo";

export async function loginClient(req: any, res: any) {
  try {
    const { phoneNumber, password } = req.body;
    const foundUser = await ClientModel.findOne({ phoneNumber });
    if (!foundUser) {
      res.json({ message: "wrong password or phone number" });
      return;
    }
    if (!foundUser.password) {
      res.json({ message: "wrong password or phone number" });
      return;
    }
    const match =await bcrypt.compare(password,foundUser.password)
   if (!match){
    res.json({ message: "wrong password or phone number" });
    return;
  }
    
    const token = jwt.encode({ id: foundUser._id, role: "user" }, secret);

    res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });

    return res.status(200).send({ message: "Login successful" ,response:"ok"});

  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
