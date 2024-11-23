import { ServiceProviderModel } from "../../model/serviceProvider/serviceProviderModel";


export async function addServiceProvider(req: any, res: any){
    try {
        const { serviceProviderName, phone, email, price, averageRating } = req.body;
        
        if (!serviceProviderName ||!phone ||!email ||!price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newServiceProvider = await ServiceProviderModel.create({
            serviceProviderName,
            phone,
            email,
            price,
            averageRating
        });

        console.log("we recived new service provider: " + newServiceProvider)
        if (!newServiceProvider){
            return res.status(400).json({ message: "Failed to create service provider" });
        }

        res.json(newServiceProvider);
}
    catch (error: any) {
        console.error(error)
        return res.status(500).send({ error: error.message })
    }
}