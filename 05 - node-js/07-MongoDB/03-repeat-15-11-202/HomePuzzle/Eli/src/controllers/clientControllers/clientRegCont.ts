import { ClientModel } from "../../models/clientModel";

export async function registerClient(req:any,res:any)
{
    try {
        const {name , phoneNumber,password} =req.body;
        const newClient =  ClientModel.create({name,phoneNumber,password});
        res.json({message:"we did it patrick new account !",phoneNumber})
    } catch (error) {
        console.error("error");
        return res.status(500).send({ error: "Nothing" });
     }
}