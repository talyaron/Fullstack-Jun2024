import { UserModel } from "../../models/userModel";
import bcrypt from 'bcrypt';
const saltRounds = process.env.SALT_BCRYPT;


export const secret:string =String(process.env.SECRET_JWT);

export async function addUser(req: any, res: any) {
  try {
    if(!saltRounds)throw new Error('add salt')
    const { name,password, email, phone,imageUrl, yearOfBirth } = req.body;
    const hashPassword =await bcrypt.hash(password, saltRounds);

    const result = await UserModel.create({
      name,
      password:hashPassword,
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
