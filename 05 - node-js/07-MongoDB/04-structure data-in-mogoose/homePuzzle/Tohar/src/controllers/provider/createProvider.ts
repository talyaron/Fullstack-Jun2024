import { userModel } from "../../models/userModel";
import { providerModel } from "../../models/ProviderModel";
import { Service } from "../../models/ServiceModel";

export async function createProvider(req: any, res: any) {
    try {
    const { id } = req.body;
    const serviceId:Service[] = [];
    const newProvider = new providerModel({id, serviceId}); 

    userModel.findOne({id: id}).then(user => {
        if(user) {
            res.json(user.isProvider = true)
            newProvider.save();
        }
        res.status(400).json({ message: 'User not found' });
    }); 
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    };
}