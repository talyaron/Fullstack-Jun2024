import { ClientModel } from "../../model/users/ClientModel";

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
        const result_outPut = await ClientModel.create({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth
        })
         console.log("the result out: " + result_outPut)
        if(!result_outPut){
            return res.status(400).send({error:"Couldn't create new user"})
        }

        res.json(result_outPut);

    } catch (error:any) {
        console.error(error)
        return res.status(500).send({error:error.message})
    }
}