import { AppointmentModel } from "../../models/appointmentModel";



export const updateAppointment = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: "Failed to update appointment", error });
  }
};