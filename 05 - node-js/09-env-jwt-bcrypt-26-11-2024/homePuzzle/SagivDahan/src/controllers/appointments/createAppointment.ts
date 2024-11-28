import { Request, Response } from 'express';
import { AppointmentsModel } from '../../models/appointmentsModel';


export const createAppointment = async (req: Request, res: Response) => {
    try {
        const {
            date,
            startTime,
            endTime,
            service,
            price,
            clientId,
            providerId,
            status,
            rating,
            review,
        } = req.body;

        const newAppointment = new AppointmentsModel({
            date,
            startTime,
            endTime,
            service,
            price,
            clientId,
            providerId,
            status,
            rating,
            review,
        });

        await newAppointment.save();
        res.status(201).send(newAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create appointment' });
    }
};