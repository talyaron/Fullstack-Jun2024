import { ClientModel } from "../../model/users/ClientModel";

export async function getAllClients(req: any, res: any) {
    try {
        const clients = await ClientModel.find();
        res.json({ clients });
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
}

