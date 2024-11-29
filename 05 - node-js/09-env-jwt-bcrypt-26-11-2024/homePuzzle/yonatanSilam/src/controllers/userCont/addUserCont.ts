import { UserModel } from "../../models/userModel";
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
const saltRounds = 10;


export const secret:string ='silam';

export async function addUser(req: any, res: any) {
  try {
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
