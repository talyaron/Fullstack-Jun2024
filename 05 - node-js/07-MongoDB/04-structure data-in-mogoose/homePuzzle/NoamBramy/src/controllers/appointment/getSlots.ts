import { AppointmentModel } from "../../model/appointment/appointmentModel";

export const getAvailableSlots = async (req: any, res: any) => {
  try {
    const { serviceProvider, date } = req.query;

    if (!serviceProvider || !date) {
      return res.status(400).json({ message: "Missing service provider or date" });
    }

    const parsedDate = new Date(date as string);
    const workingHours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
    const appointments = await AppointmentModel.find({
      serviceProvider,
      date: parsedDate,
    });

    const bookedSlots = appointments.map((appt) => appt.startTime);

    const availableSlots = workingHours.filter((slot) => !bookedSlots.includes(slot));

    res.status(200).json(availableSlots);
  } catch (error:any) {
    res.status(500).json({ message: "Error fetching slots", error: error.message });
  }
};
