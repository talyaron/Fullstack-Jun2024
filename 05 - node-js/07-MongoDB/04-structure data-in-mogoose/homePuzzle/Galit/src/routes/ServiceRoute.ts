import express from "express";
import { addService, getServiceById, editService, deleteService  } from "../controllers/service/setService";
import { ServiceModel } from "../model/service/serviceModel";

const router = express.Router();

router.post("/add-service", addService);
router.get("/:id", getServiceById);
router.delete('/delete-service', deleteService);
router.put('/edit-service', editService);

router.get("/", async (req: any, res: any) => {
    try {
        const services = await ServiceModel.find();
        if (!services || services.length === 0) {
            return res.status(404).send({ error: "No services found" });
        }
        res.status(200).send(services);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
    }
});

export default router;
