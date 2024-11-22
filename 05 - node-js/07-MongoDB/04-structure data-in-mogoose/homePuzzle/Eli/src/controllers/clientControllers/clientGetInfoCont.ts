import { ClientModel } from "../../models/clientModel";

export async function getClientInfo(req: any, res: any) {
  try {
    const { key } =await req.body;

    const foundUser = await ClientModel.findOne({ key:key });
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
    console.error("error");
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
