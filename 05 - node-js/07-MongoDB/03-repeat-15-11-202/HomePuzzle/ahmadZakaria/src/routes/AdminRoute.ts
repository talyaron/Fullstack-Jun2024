import express from 'express'
import {addAdmin, getAdminById, editAdmin, deleteAdmin} from "../controller/admin/setAdmin" 
import {AdminModel} from "../model/admins/AdminModel"

const router = express.Router();

router.post("/add-admin",addAdmin);
router.get("/:id", getAdminById);
router.delete("delete-admin",deleteAdmin);
router.put("/edit-admin", editAdmin);

router.get("/",async (req:any, res:any) => {
    try{
        const admins = await AdminModel.find();
        if(!admins || addAdmin.length === 0) {
            return res.status(404).send({error : "No admins found"});
        }
        res.status(200).send(admins);
    }catch(error){
        console.error(error);
        res.status(500).send({error: "Server error"});
    }
})
export default router;
``