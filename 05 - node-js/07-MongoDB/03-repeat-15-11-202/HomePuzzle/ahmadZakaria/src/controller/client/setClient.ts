import internal from "stream";
import {ClientModel}from "../../model/clients/ClientsModel";

export async function addClient(req:any, res:any){
    try{
        const {name,email,phone}=req.body;

        const result = await ClientModel.create({
            name, email,phone,
        });

        if(!result){
            return res.status(400).send({ });
        }
        return res.status(201).send({ });
    }catch(error:any){
        console.error('Error in addClient: ', error);

        if(error.code === 11000){
            return res.status(400).send({ });
        }

        return res.status(500).send({ error : "Internal server Error"});

    }
}
export async function getClientById(req: any, res: any){
    try{
        const {id} = req.params;
        const client = await ClientModel.findById(id);

        if(!client){
            return res.status(404).send({ error : "client not found"});
        }
        return res.status(200).send(client);
    }catch(error){
        console.error("Error in getClientById:", error);
        return res.status(500).send({error: "internal Server Error"});
    }
} 

export async function deleteClient(req:any, res:any){
    const {id} = req.body;
    try{

        console.log(`Deleting client with id: ${id}`);

        const client =await ClientModel.findById(id);
        if(!client){
            console.log(`Client with id ${id} not found`);
            return res.status(401).json({error: "Client not found "});
        }

        await ClientModel.findByIdAndDelete(id);
        console.log(`client with id ${id} delete`);
        res.status(200).json({error: "Client deleted successfully"});
    }catch(error){
        console.error('Error deleting client:', error);
        res.status(500).json({error: "Intenal Server error"});
    }
}

export async function editClient(req:any,res:any){
    const {id,name,email,phone}=req.body;
    try{
        console.log(`Editing client with id: ${id}`);

        const updatedFields: Partial<{name:string, email:string ,phone:string}> = {};
        if(name !== undefined) updatedFields.name=name;
        if(email !== undefined) updatedFields.email=email;
        if(phone !== undefined) updatedFields.phone=phone;

        const updatedClient = await ClientModel.findByIdAndUpdate(id,updatedFields,{new :true});

        if(!updatedClient){
            console.log(`Client with id ${id} not found`);
            return res.status(404).json({error: "Client not found"});
        }

        console.log(`Client with id ${id} update `);
        res.status(200).json({error: "Client updated successfully",client: updatedClient});


    }catch(error){
        console.error('Client updating :', error);
        res.status(500).json({error:"Intenal Server error "});
    }
}