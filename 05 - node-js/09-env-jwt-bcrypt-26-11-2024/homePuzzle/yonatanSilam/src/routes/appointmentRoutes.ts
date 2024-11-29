import express from "express";
import { addAppointment } from "../controllers/appointmentCont/addAppointmentCont";


const router = express.Router();

router.post("/add-appointment", addAppointment)
// router.get("/get-users", getUsers)
// router.get("/get-user", getUserById)
// router.get("/get-sP-by-email", getSPByEmail)
// router.patch("/updateName", updateName)
// router.delete("/delete-user", deleteUserById)


export default router