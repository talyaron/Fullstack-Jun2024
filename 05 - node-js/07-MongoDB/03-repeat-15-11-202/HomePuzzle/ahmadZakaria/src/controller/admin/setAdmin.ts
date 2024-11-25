import internal from "stream";
import {AdminModel}from "../../model/admins/AdminModel";

export async function addAdmin(req:any, res:any){
    try{
        const {adminName,adminEmailmail,adminPhone,adminProfession,adminRole,adminYearOfBirth}=req.body;

        const result = await AdminModel.create({
            adminName, adminEmailmail,adminPhone,adminProfession,adminRole,adminYearOfBirth
        });

        if(!result){
            return res.status(400).send({ });
        }
        return res.status(201).send({ });
    }catch(error:any){
        console.error('Error in addAdmin: ', error);

        if(error.code === 11000){
            return res.status(400).send({ });
        }

        return res.status(500).send({ error : "Internal server Error"});

    }
}
export async function getAdminById(req: any, res: any){
    try{
        const {id} = req.params;
        const admin = await AdminModel.findById(id);

        if(!admin){
            return res.status(404).send({ error : "admin not found"});
        }
        return res.status(200).send(admin);
    }catch(error){
        console.error("Error in getAdminById:", error);
        return res.status(500).send({error: "internal Server Error"});
    }
} 

export async function deleteAdmin(req:any, res:any){
    const {id} = req.body;
    try{

        console.log(`Deleting admin with id: ${id}`);

        const admin =await AdminModel.findById(id);
        if(!admin){
            console.log(`admin with id ${id} not found`);
            return res.status(401).json({error: "admin not found "});
        }

        await AdminModel.findByIdAndDelete(id);
        console.log(`admin with id ${id} delete`);
        res.status(200).json({error: "admin deleted successfully"});
    }catch(error){
        console.error('Error deleting admin:', error);
        res.status(500).json({error: "Intenal Server error"});
    }
}

export async function editAdmin(req:any,res:any){
    const {id,adminName,adminEmail,adminPhone,adminProfession,adminRole,adminYearOfBirth}=req.body;
    try{
        console.log(`Editing admin with id: ${id}`);

        const updatedAdminFields: Partial<{adminName:string, adminEmail:string ,adminPhone:string,adminProfession:string,adminRole:string,adminYearOfBirth:string}> = {};
        if(adminName!== undefined) updatedAdminFields.adminName= adminName;
        if(adminEmail !== undefined) updatedAdminFields.adminEmail=adminEmail;
        if(adminPhone !== undefined) updatedAdminFields.adminPhone=adminPhone;
        if(adminProfession !== undefined) updatedAdminFields.adminProfession=adminProfession;
        if(adminRole !== undefined) updatedAdminFields.adminRole=adminRole;
        if(adminYearOfBirth !== undefined) updatedAdminFields.adminYearOfBirth=adminYearOfBirth;


        const updatedadmin = await AdminModel.findByIdAndUpdate(id,updatedAdminFields,{new :true});

        if(!updatedadmin){
            console.log(`admin with id ${id} not found`);
            return res.status(404).json({error: "admin not found"});
        }

        console.log(`admin with id ${id} update `);
        res.status(200).json({error: "admin updated successfully",Admin: updatedadmin});


    }catch(error){
        console.error('admin updating :', error);
        res.status(500).json({error:"Intenal Server error "});
    }
}