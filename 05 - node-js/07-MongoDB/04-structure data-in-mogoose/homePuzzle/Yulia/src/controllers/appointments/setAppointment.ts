import { AppointmentModel } from "../../models/appointmentModel";

// Create a new appointment
export const createAppointment = async (req: any, res: any) => {
  try {
    const appointment = new AppointmentModel(req.body);
    await appointment.save();
    res.status(201).json(appointment); // Return the created appointment
  } catch (error) {
    res.status(500).json({ message: "Failed to create appointment", error });
  }
};
