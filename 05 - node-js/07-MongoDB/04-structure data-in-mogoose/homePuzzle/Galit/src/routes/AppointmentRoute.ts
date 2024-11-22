import express from "express";
import {
  addAppointment,
  getAppointmentById,
  editAppointment,
  deleteAppointment,
} from "../controllers/appointment/setAppointment";
import { AppointmentModel } from "../model/appointment/appointmentModel";

const router = express.Router();

router.post("/add-appointment", addAppointment);

router.get("/:id", getAppointmentById);

router.delete("/delete-appointment", deleteAppointment);

router.put("/edit-appointment", editAppointment);

router.get("/", async (req: any, res: any) => {
  try {
    const appointments = await AppointmentModel.find();
    if (!appointments || appointments.length === 0) {
      return res.status(404).send({ error: "No appointments found" });
    }
    res.status(200).send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error" });
  }
});

export default router;
