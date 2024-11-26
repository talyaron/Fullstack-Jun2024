import { AppointmentModel } from "../../models/appointmentModel";

// Get a single appointment by ID
export const getAppointmentById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const appointment = await AppointmentModel.findById(id)
      .populate("client")
      .populate("serviceProvider")
      .populate("service");
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointment", error });
  }
};
