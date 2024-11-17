import { ClientModel } from "../../model/users/ClientModel";

export async function addClient(req: any, res: any) {
    try {
        const { firstName, lastName, email, phone, yearOfBirth } = req.body;

        const result = await ClientModel.create({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth,
        });

        if (!result) {
            return res.status(400).send({  });
        }

        return res.status(201).send({ });
    } catch (error: any) {
        console.error("Error in addClient:", error);

        if (error.code === 11000) {
            return res.status(400).send({ });
        }

        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getClientById(req: any, res: any) {
    try {
        const { id } = req.params;
        const client = await ClientModel.findById(id);

        if (!client) {
            return res.status(404).send({ error: "Client not found" });
        }

        return res.status(200).send(client);
    } catch (error) {
        console.error("Error in getClientById:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}



export async function deleteClient(req: any, res: any) {
    const { id } = req.body;
    try {
        console.log(`Deleting client with id: ${id}`);

        const client = await ClientModel.findById(id);
        if (!client) {
            console.log(`Client with id ${id} not found`);
            return res.status(401).json({ error: "Client not found" });
        }

        await ClientModel.findByIdAndDelete(id);
        console.log(`Client with id ${id} deleted`);
        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        console.error('Error deleting client:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function editClient(req: any, res: any) {
    const { id, firstName, lastName, email, phone, yearOfBirth } = req.body;

    try {
        console.log(`Editing client with id: ${id}`);
        
        const updatedFields: Partial<{ firstName: string;  lastName: string; email: string; phone: string; yearOfBirth: string; }> = {};
        if (firstName !== undefined) updatedFields.firstName = firstName;
        if (lastName !== undefined) updatedFields.lastName = lastName;
        if (email !== undefined) updatedFields.email = email;
        if (phone !== undefined) updatedFields.phone = phone;
        if (yearOfBirth !== undefined) updatedFields.yearOfBirth = yearOfBirth;

        const updatedClient = await ClientModel.findByIdAndUpdate(id, updatedFields, { new: true });
        
        if (!updatedClient) {
            console.log(`Client with id ${id} not found`);
            return res.status(404).json({ error: "Client not found" });
        }

        console.log(`Client with id ${id} updated`);
        res.status(200).json({ message: "Client updated successfully", Client: updatedClient });
    } catch (error) {
        console.error('Error updating client:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

