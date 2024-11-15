import { ClientModel } from "../../model/users/ClientModel";

export async function addClient(req:any, res: any){
    try {
const{
    firstName,
    lastName,
    email,
    phone,
    yearOfBirth
}= req.body;

const result = await ClientModel.create({
    firstName,
    lastName,
    email,
    phone,
    yearOfBirth
})

console.log(result)
if(!result){
    return res.status(400).send({error:"couldn't create new user"})
}
return res.status(201).send({message:"client created successfully"})
    }catch (error){
        console.log (error)
        return res.status(500).send({error})
    }
    }
