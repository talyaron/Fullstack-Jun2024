import { AppointmentModel } from "../../models/appointmentModel";

export const addComment = async (req: any, res: any): Promise<undefined> => {
  try {
    const { client, serviceProvider, date, startTime, endTime } =
      req.body;
    if (!client || !serviceProvider || !date || !startTime|| !endTime) {
      res
        .status(400)
        .json({ message: "Please provide all the required fields" });
      return;
    }
    const defaultStatus = "pending";
    const defaultPrice = 20;
    const newComment = new AppointmentModel({
      client,
      serviceProvider,
      date,
      startTime,
      endTime,
      status: defaultStatus,
      price: defaultPrice,
    });

    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
    return;
  } catch (error) {
    res.status(500).json({ message: "Failed to add comment", error });
    return;
  }
};
// - client: reference to the client
// - serviceProvider: reference to the service provider
// - date: date of the appointment
// - startTime: time of the appointment
// - endTime: end time of the appointment
// - status: status of the appointment (pending, confirmed, canceled)
// - service: reference to the service
// - price: price of the service
// - rating: rating of the service provider by the client
// - review: review of the service provider by the client
