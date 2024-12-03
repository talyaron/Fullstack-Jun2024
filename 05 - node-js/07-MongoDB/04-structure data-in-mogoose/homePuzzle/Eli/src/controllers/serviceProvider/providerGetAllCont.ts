import { ServiceProviderModel } from "../../models/serviceProviderModel";

export async function getProviders(req: any, res: any) {
  try {
    const foundProviders = await ServiceProviderModel.find({ });
 //  console.log(key,foundUser);
    if (!foundProviders) {
      res.json({ message: "no provider Found!" ,error:"notFound"});
      return;
    }

  //  console.log(name,phoneNumber,password );

    res.json({ foundProviders });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error: "something went Wrong!" });
  }
}
