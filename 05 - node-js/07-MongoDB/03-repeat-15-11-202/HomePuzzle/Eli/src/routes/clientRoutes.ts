import express from "express";
import { registerClient } from "../controllers/clientControllers/clientRegCont";
import { loginClient } from "../controllers/clientControllers/clientLoginCont";
import { getClientInfo } from "../controllers/clientControllers/clientGetInfoCont";

const router = express.Router();

router.post("/register-client", registerClient);
router.post("/login-client", loginClient);
router.post("/info-client", getClientInfo);
export default router;
