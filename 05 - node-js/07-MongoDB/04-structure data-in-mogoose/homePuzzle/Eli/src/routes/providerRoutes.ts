import  express  from "express";
import { registerProvider } from "../controllers/serviceProvider/providerCreateCont";
import { getProviders } from "../controllers/serviceProvider/providerGetAllCont";

const router = express.Router();

router.post("/register-provider", registerProvider);
router.get("/get-providers",getProviders);
export default router;
