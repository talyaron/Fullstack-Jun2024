import express from "express";
import { addSP } from "../controllers/sPCont/addSPCont";
import { getSPByEmail } from "../controllers/sPCont/getSPCont";

const router = express.Router();

router.post("/add-sP", addSP)
// router.get("/get-users", getUsers)
// router.get("/get-user", getUserById)
router.get("/get-sP-by-email", getSPByEmail)
// router.patch("/updateName", updateName)
// router.delete("/delete-user", deleteUserById)


export default router