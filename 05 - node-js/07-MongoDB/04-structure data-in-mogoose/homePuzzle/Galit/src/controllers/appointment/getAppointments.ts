import { AppointmentModel } from "../../model/appointment/appointmentModel";


export const getAllAppointments= async (req: any, res: any) => {
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
  }