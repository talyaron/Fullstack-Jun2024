import { UserModel } from "../../models/userModel";

export async function getUsers(req: any, res: any) {
    try {
        const allUsers=await UserModel.find();
      return res.status(201).send({UserModel:allUsers , message:"u get all users successfully!"})
    } catch (error) {
      console.error("error");
      return res.status(500).send({error})
    }
  }