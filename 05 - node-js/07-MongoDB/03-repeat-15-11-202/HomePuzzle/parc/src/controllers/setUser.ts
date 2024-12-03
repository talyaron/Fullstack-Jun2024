import { UserModel } from "../models/userModel";

export async function addUser(req:any, res:any){
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            tel,
            yearOfBirth
        } = req.body;

         const result = UserModel.create({
            firstName,
            lastName,
            email,
            password,
            tel,
            yearOfBirth
        })

        console.log(result)
        if(!result){
            return res.status(400).send ({error:"couldn't create new user"})

        }
        return res.status(201).send({message:"user created successfully"})


    }catch(error){
        console.log(error)
        return res.status(500).send({error:"error message"})
    }
}