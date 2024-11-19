import { ClientModel } from "../../model/clients/ClientModel";

export async function addClient(req: any, res: any) {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth
        } = req.body;

        //send request to DB
        const result = await ClientModel.create({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth
        })
        console.log(result)
        if(!result){
            return res.status(400).send({error:"Couldn't create new user"})
        }

        return res.status(201).send({message:"Client created successfully"})


    } catch (error:any) {
        console.error(error)
        return res.status(500).send({error:error.message})
    }
}