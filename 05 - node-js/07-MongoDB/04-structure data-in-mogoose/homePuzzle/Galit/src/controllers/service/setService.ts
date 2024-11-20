import { ServiceModel } from "../../model/service/serviceModel";

export async function addService(req: any, res: any) {
    try {
        const { name, description, duration,price} = req.body;

        if (!name || !description || !duration || !price) {
            return res.status(400).send({ error: "Missing required fields." });
        }

        const result = await ServiceModel.create({
            name,
            description,
            duration,
            price,
      
        });

        if (!result) {
            return res.status(400).send({ error: "Failed to create admin." });
        }

        return res.status(201).send({ message: "Admin added successfully", admin: result });
    } catch (error: any) {
        console.error("Error in addAdmin:", error);

        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(400).send({ error: `${duplicateField} already exists.` });
        }

        return res.status(500).send({ error: "Internal Server Error" });
    }
}


export async function getServiceById(req: any, res: any) {
    try {
        const { id } = req.params;
        const Service = await ServiceModel.findById(id);

        if (!Service) {
            return res.status(404).send({ error: "Service not found" });
        }

        return res.status(200).send(Service);
    } catch (error) {
        console.error("Error in getServiceById:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}



export async function deleteService(req: any, res: any) {
    const { id } = req.body;
    try {
        console.log(`Deleting service with id: ${id}`);

        const Service = await ServiceModel.findById(id);
        if (!Service) {
            console.log(`Service with id ${id} not found`);
            return res.status(401).json({ error: "Service not found" });
        }

        await ServiceModel.findByIdAndDelete(id);
        console.log(`Service with id ${id} deleted`);
        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function editService(req: any, res: any) {
    const { id, name,description , duration, price} = req.body;

    try {
        console.log(`Editing service with id: ${id}`);
        
        const updatedServiceFields: Partial<{ name: string; description: string; duration: number; price: number }> = {};
        if (name !== undefined) updatedServiceFields.name = name
        if (description !== undefined) updatedServiceFields.description = description;
        if (duration !== undefined) updatedServiceFields.duration = duration;
        if (price !== undefined) updatedServiceFields.price = price;


        const updatedService = await ServiceModel.findByIdAndUpdate(id, updatedServiceFields, { new: true });
        
        if (!updatedService) {
            console.log(`Service with id ${id} not found`);
            return res.status(404).json({ error: "Service not found" });
        }

        console.log(`Service with id ${id} updated`);
        res.status(200).json({ message: "Service updated successfully", Service: updatedService });
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

