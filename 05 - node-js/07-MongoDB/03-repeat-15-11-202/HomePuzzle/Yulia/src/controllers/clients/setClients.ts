import { ClientModel } from "../../models/clientModel";

export async function addClient(req: any, res: any) {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth,
        } = req.body;
        
        const client = await ClientModel.create({
            firstName,
            lastName,
            email,
            phone,
            yearOfBirth,
        });

        console.log(client);

        if (!client) {
            return res.status(400).json({ message: 'Client not created' });
        }
        
        return res.status(200).json({ message: 'Client created' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}
    