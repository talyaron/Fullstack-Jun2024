import { ClientModel } from "../../models/clientModel";
import jwt from 'jwt-simple';
import 'dotenv/config';
import { secret } from "./clientRegCont";
 
export async function getClientInfo(req: any, res: any) {
  try {
    const { user } = await req.cookies;
    console.log(user);
    //decode the token
    const decoded = jwt.decode(user, secret);
    console.log(decoded);


    const foundUser = await ClientModel.findOne({ key:decoded._id });
 //  console.log(key,foundUser);
    if (!foundUser) {
      res.json({ message: "no user Found!" ,error:"notFound"});
      return;
    }
    const name = foundUser.name;
    const phoneNumber=foundUser.phoneNumber;
    const password=foundUser.password?.length;
  //  console.log(name,phoneNumber,password );

    res.json({ message: "Log in success !",name,phoneNumber,password });
  } catch (error) {
    console.error("error",error);
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
