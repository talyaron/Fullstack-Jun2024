import { serviceModel, services } from "../../models/ServiceModel";
import { randomBytes } from 'crypto'; 

export async function addService(req: any, res: any){
    try{
    const { serviceId, serviceName, price, duration} = req.body;

            const service = await serviceModel.findOne({ serviceName: serviceName});
            if(service){
                 return res.status(400).json({ message: 'Email already registered!'});
            } else {
                const serviceId = randomBytes(16).toString("hex"); 
                services.push({serviceId, serviceName, price, duration});
                
                const newService = new serviceModel({serviceId, serviceName, price, duration});
                await newService.save(); 
                
                res.status(201).json({ message: "User added successfully", newService });
            };
        } catch (error) {
            res.status(500).json({ error: "An error occurred while adding the user" });
        };
}