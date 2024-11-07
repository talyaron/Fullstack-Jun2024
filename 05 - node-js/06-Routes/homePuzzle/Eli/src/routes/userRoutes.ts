import  express  from "express";
import path from "path";
import { registerUser } from "../controllers/userControllers/userRegisterCont";
import { userLogOut } from "../controllers/userControllers/userLogOutCont";
import { accountLogin } from "../controllers/userControllers/userLoginCont";
import { checkKey } from "../controllers/userControllers/userCheckKeyCont";


const router = express.Router()




router.post('/register-user', registerUser);
router.post('/log-out', userLogOut);
router.post(`/account-login`,accountLogin)
router.post(`/check-key`,checkKey)


export default router;