import express from "express";
import { registerClient } from "../controllers/clientControllers/clientRegCont";
import { loginClient } from "../controllers/clientControllers/clientLoginCont";
import { getClientInfo } from "../controllers/clientControllers/clientGetInfoCont";
import { deleteClient } from "../controllers/clientControllers/clientDeleteCont";
import { updateClient } from "../controllers/clientControllers/clientUpdateCont";

const router = express.Router();

router.post("/register-client", registerClient);
router.post("/login-client", loginClient);
router.post("/info-client", getClientInfo);
router.post("/delete-client", deleteClient);
router.post("/update-client",updateClient)
export default router;
