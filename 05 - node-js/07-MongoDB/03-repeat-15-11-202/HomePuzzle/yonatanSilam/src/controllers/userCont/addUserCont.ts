import { UserModel } from "../../models/userModel";

export async function addUser(req: any, res: any) {
  try {
    const { name, email, phone,imageUrl, yearOfBirth } = req.body;
    const result = await UserModel.create({
      name,
      email,
      phone,
      imageUrl,
      yearOfBirth,
    });
    console.log(result);

    if(!result){
        return res.status(400).send({error:"Couldn't create new user!"})
    }

    return res.status(201).send({message:"user was created successfully!"})
  } catch (error) {
    console.error("error");
    console.log('here')
    return res.status(500).send({error})
  }
}
//673f103e3a95f1697bf912cf