import { AdminModel } from "../../model/admins/AdminModel";

export async function addAdmin(req: any, res: any) {
    try {
        const { AdminFirstName, AdminLastName, AdminEmail, AdminPhone, AdminProfession, AdminRole, AdminYearOfBirth } = req.body;

        if (!AdminFirstName || !AdminLastName || !AdminEmail) {
            return res.status(400).send({ error: "Missing required fields." });
        }

        const result = await AdminModel.create({
            AdminFirstName,
            AdminLastName,
            AdminEmail,
            AdminPhone,
            AdminProfession,
            AdminRole,
            AdminYearOfBirth,
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
    const { id, AdminFirstName, AdminLastName, AdminEmail, AdminPhone, AdminProfession, AdminRole, AdminYearOfBirth } = req.body;

    try {
        console.log(`Editing admin with id: ${id}`);
        
        const updatedAdminFields: Partial<{ AdminFirstName: string;  AdminLastName: string; AdminEmail: string; AdminPhone: string; AdminProfession : string; AdminRole: string; AdminYearOfBirth: string; }> = {};
        if (AdminFirstName !== undefined) updatedAdminFields.AdminFirstName = AdminFirstName;
        if (AdminLastName !== undefined) updatedAdminFields.AdminLastName = AdminLastName;
        if (AdminEmail !== undefined) updatedAdminFields.AdminEmail = AdminEmail;
        if (AdminPhone !== undefined) updatedAdminFields.AdminPhone = AdminPhone;
        if (AdminProfession !== undefined) updatedAdminFields.AdminProfession = AdminProfession;
        if (AdminRole !== undefined) updatedAdminFields.AdminRole = AdminRole;

        if (AdminYearOfBirth !== undefined) updatedAdminFields.AdminYearOfBirth = AdminYearOfBirth;

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

