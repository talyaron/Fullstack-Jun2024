import { Router } from "express";
import { addUser } from "../controllers/setUser";
import { getUser } from "../controllers/getUser";
import { updateUser } from "../controllers/upadteUser";

const router = Router();

router.post("/add-user", addUser);
router.get("/get-user", getUser);
router.put("/update-user", updateUser);

export default router;
