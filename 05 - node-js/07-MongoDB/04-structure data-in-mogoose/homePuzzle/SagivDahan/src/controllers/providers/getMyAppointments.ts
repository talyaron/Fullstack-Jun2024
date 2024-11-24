import { Request, Response } from 'express';
import { userModel } from '../../models/userModel';
import { AppointmentsModel } from '../../models/appointmentsModel';

export const getMyAppointments = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        //check if the user is service provider
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(403).json({ message: 'User is not found.'});
        }

        //find the providerId
        const appointments = await AppointmentsModel.find({ userId });

        if (appointments.length === 0) {
            return res.status(404).json({ message: 'No appointments found for this provider.' });
        }

       //check when the appointments
        for (let i = 0; i < appointments.length; i++) {
            const currentAppointment = appointments[i];
            const { startTime, endTime } = currentAppointment;

            // check if startime isnt small then endtime.
            if (new Date(startTime) >= new Date(endTime)) {
                return res.status(400).json({
                    message: `Invalid time range in appointment ${currentAppointment._id}: startTime must be before endTime.`,
                });
            }

            //check if there is more appointment
            if (i + 1 < appointments.length) {
                const nextAppointment = appointments[i + 1];
                const { startTime: nextStartTime, endTime: nextEndTime } = nextAppointment;

                //check if the currectly endtime is smaller then next appointment startime
                if (new Date(endTime) > new Date(nextStartTime)) {
                    return res.status(400).json({
                        message: `Invalid scheduling: appointment ${currentAppointment._id} overlaps with appointment ${nextAppointment._id}.`,
                    });
                }

                //check if next startime appointment is bigger then endtime of currectly appointment
                if (new Date(nextStartTime) <= new Date(endTime)) {
                    return res.status(400).json({
                        message: `Invalid scheduling: appointment ${nextAppointment._id} starts too early after appointment ${currentAppointment._id}.`,
                    });
                }
            }
        }
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};