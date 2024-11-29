import { serviceProviderModel } from "../../models/serviceProviderModel";

export async function addSP(req: any, res: any) {
  try {
    const { name,password, email, phone,imageUrl, yearOfBirth } = req.body;
    const result = await serviceProviderModel.create({
      name,
      password,
      email,
      phone,
      imageUrl,
      yearOfBirth,
    });
    console.log(result);

    if(!result){
        return res.status(400).send({error:"Couldn't create new sP!"})
    }

    return res.status(201).send({message:"sP was created successfully!"})
  } catch (error) {
    console.error("error");
    return res.status(500).send({error})
  }
}
