import { AppointmentModel } from "../../models/appointmentModel";

export const getAllAppointments = async (_req: any, res: any) => {
  try {
    const appointments = await AppointmentModel.find()
      .populate("client")
      .populate("serviceProvider")
      .populate("service");
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointments", error });
  }
};
