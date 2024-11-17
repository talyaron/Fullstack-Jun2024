import  express  from "express";
import { registerClient } from "../controllers/clientControllers/clientRegCont";

  const router=express.Router();

  router.post("/register-client",registerClient)

  export default router;
