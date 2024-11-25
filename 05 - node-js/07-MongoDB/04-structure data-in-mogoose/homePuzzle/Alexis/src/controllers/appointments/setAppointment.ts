import { Request, Response } from "express";
import AppointmentModel from "../../model/appointments/appointmentModel";

export const addAppointment = async (req: Request, res: Response) => {
  try {
    const {
      name,
      price,
      description,
      category,
      inStock,
      clientId,
      serviceProviderId,
      startTime,
      endTime,
      status,
      serviceId,
      rating,
      reviewId,
    } = req.body;

    const newAppointment = new AppointmentModel({
      name,
      price,
      description,
      category,
      inStock,
    });

    const savedAppointment = await newAppointment.save();

    res.status(201).json({ message: "Appointment saved", savedAppointment });
  } catch (error) {
    res.status(500).json({ message: "Error saving product", error });
  }
};
