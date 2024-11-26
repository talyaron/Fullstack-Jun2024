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
const _available = await available(startTime, endTime);

if (_available === false){
  return res.status(400).json({message:'This time is not available for this service provider'})
}

const newAppointment = new AppointmentModel({
      name,
      price,
      startTime,
      endTime,
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

export async function available(startTime: number, endTime: number){
  try{
    const appointments = await appointmentModel.find({
      startTime:{$lt: endTime}, endTime:{$gt: startTime}
    });
    return appointments.length === 0;
  }
  catch(error:any){
    console.log('Error creating appointment:',error.message);
    return false;
  }
}