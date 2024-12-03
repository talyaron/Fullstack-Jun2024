import { AppointmentModel } from "../../models/appointmentModel";

export const deleteAppointment = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const deletedAppointment = await AppointmentModel.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete appointment", error });
  }
};
