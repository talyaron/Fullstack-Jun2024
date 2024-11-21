import { ServiceModel } from "../../model/service/serviceModel";

export async function addService(req: any, res: any) {
    try {
        const { admin, name, description, duration, price } = req.body;

        if (!admin || !name || !description || !duration || !price) {
            return res.status(400).send({ error: "Missing required fields." });
        }

        const result = await ServiceModel.create({
            admin,
            name,
            description,
            duration,
            price,
        });

        if (!result) {
            return res.status(400).send({ error: "Failed to create service." });
        }

        return res.status(201).send({ message: "Service added successfully", service: result });
    } catch (error: any) {
        console.error("Error in addService:", error);

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
        const Service = await ServiceModel.findById(id).populate('admin'); 

        if (!Service) {
            return res.status(404).send({ error: "Service not found" });
        }

        return res.status(200).send(Service);
    } catch (error) {
        console.error("Error in getServiceById:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getAllServices(req: any, res: any) {
    try {
        const services = await ServiceModel.find()
            .populate('admin', 'AdminFirstName AdminLastName')

        if (!services || services.length === 0) {
            return res.status(404).send({ error: "No services found" });
        }

        res.status(200).json(services); 
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
}

export async function deleteService(req: any, res: any) {
    const { id } = req.body;
    try {
        console.log(`Deleting service with id: ${id}`);

        const service = await ServiceModel.findById(id);
        if (!service) {
            console.log(`Service with id ${id} not found`);
            return res.status(404).json({ error: "Service not found" });
        }

        await ServiceModel.findByIdAndDelete(id);
        console.log(`Service with id ${id} deleted`);
        return res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        console.error('Error deleting service:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function editService(req: any, res: any) {
    const { id, admin, name, description, duration, price } = req.body;

    try {
        console.log(`Editing service with id: ${id}`);
        
        const updatedServiceFields: Partial<{ admin: string; name: string; description: string; duration: number; price: number }> = {};
        if (admin !== undefined) updatedServiceFields.admin = admin;
        if (name !== undefined) updatedServiceFields.name = name;
        if (description !== undefined) updatedServiceFields.description = description;
        if (duration !== undefined) updatedServiceFields.duration = duration;
        if (price !== undefined) updatedServiceFields.price = price;

        const updatedService = await ServiceModel.findByIdAndUpdate(id, updatedServiceFields, { new: true });
        
        if (!updatedService) {
            console.log(`Service with id ${id} not found`);
            return res.status(404).json({ error: "Service not found" });
        }

        console.log(`Service with id ${id} updated`);
        return res.status(200).json({ message: "Service updated successfully", service: updatedService });
    } catch (error) {
        console.error('Error updating service:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
