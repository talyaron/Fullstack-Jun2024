import { ClientModel } from "../../model/users/ClientModel";

export async function editeClient (req: any, res: any) {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth
        } = req.body;
        
        // Find the client by ID
        const client = await ClientModel.findById(req.params.id);
        if (!client) return res.status("error"); //
        
        // Update the client's information
        client.firstName = firstName;
        client.lastName = lastName;
        client.email = email;
        client.phone = phone;
        client.yearOfBirth = yearOfBirth;
        
        // Save the updated client
        const updatedClient = await client.save();
        
        // Return the updated client
        return res.status(200).send(updatedClient);
        
    } catch (err) {
}
}