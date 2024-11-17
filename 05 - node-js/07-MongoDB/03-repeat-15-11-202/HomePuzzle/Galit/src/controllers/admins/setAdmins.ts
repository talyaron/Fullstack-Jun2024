import { AdminModel } from "../../model/admins/AdminModel";

export async function addAdmin(req: any, res: any) {
    try {
        const { firstName, lastName, email, phone, profession, role, yearOfBirth } = req.body;

        const result = await AdminModel.create({
            firstName,
            lastName,
            email,
            phone,
            profession,
            role,
            yearOfBirth,
        });

        if (!result) {
            return res.status(400).send({  });
        }

        return res.status(201).send({ });
    } catch (error: any) {
        console.error("Error in add Admin:", error);

        if (error.code === 11000) {
            return res.status(400).send({ });
        }

        return res.status(500).send({ error: "Internal Server Error" });
    }
}

export async function getAdminById(req: any, res: any) {
    try {
        const { id } = req.params;
        const admin = await AdminModel.findById(id);

        if (!admin) {
            return res.status(404).send({ error: "Admin not found" });
        }

        return res.status(200).send(admin);
    } catch (error) {
        console.error("Error in getAdminById:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}



export async function deleteAdmin(req: any, res: any) {
    const { id } = req.body;
    try {
        console.log(`Deleting admin with id: ${id}`);

        const admin = await AdminModel.findById(id);
        if (!admin) {
            console.log(`Admin with id ${id} not found`);
            return res.status(401).json({ error: "Admin not found" });
        }

        await AdminModel.findByIdAndDelete(id);
        console.log(`Admin with id ${id} deleted`);
        res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
        console.error('Error deleting admin:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function editAdmin(req: any, res: any) {
    const { id, firstName, lastName, email, phone, profession, role, yearOfBirth } = req.body;

    try {
        console.log(`Editing admin with id: ${id}`);
        
        const updatedAdminFields: Partial<{ firstName: string;  lastName: string; email: string; phone: string; profession : string; role: string; yearOfBirth: string; }> = {};
        if (firstName !== undefined) updatedAdminFields.firstName = firstName;
        if (lastName !== undefined) updatedAdminFields.lastName = lastName;
        if (email !== undefined) updatedAdminFields.email = email;
        if (phone !== undefined) updatedAdminFields.phone = phone;
        if (profession !== undefined) updatedAdminFields.profession = profession;
        if (role !== undefined) updatedAdminFields.role = role;

        if (yearOfBirth !== undefined) updatedAdminFields.yearOfBirth = yearOfBirth;

        const updatedAdmin = await AdminModel.findByIdAndUpdate(id, updatedAdminFields, { new: true });
        
        if (!updatedAdmin) {
            console.log(`Admin with id ${id} not found`);
            return res.status(404).json({ error: "Admin not found" });
        }

        console.log(`Admin with id ${id} updated`);
        res.status(200).json({ message: "Admin updated successfully", Admin: updatedAdmin });
    } catch (error) {
        console.error('Error updating admin:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

