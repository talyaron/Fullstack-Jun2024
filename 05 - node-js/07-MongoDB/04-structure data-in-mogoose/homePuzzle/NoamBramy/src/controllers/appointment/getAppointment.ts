import { AppointmentModel } from "../../model/appointment/appointmentModel";

export async function GetAppointment(req:any, res:any) {
  try {
    const appointments = await AppointmentModel.find({})
      .populate("client")
      .populate("serviceProvider");
    res.status(200).json(appointments);
  } catch (error:any) {
    res.status(500).json({ message: "Error fetching appointments", error: error.message });
  }
}