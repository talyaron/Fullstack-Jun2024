import { AppointmentModel } from "../../model/appointment/appointmentModel";


export const addAppointment = async (req: any, res: any) => {
    try {
        const { client, serviceProvider, date, startTime, endTime, status, service, price } = req.body;

        // if (!client || !serviceProvider || !date || !startTime || !endTime || !service || !price) {
        //     return res.status(400).json({ message: 'Please provide all required fields' });
        // }

        const existingAppointment = await AppointmentModel.findOne({
            serviceProvider,
            date,
            startTime,
        });
        if (existingAppointment) {
            return res.status(400).json({ message: 'The service provider is not available at this time' });
        }

        const newAppointment = new AppointmentModel({
            client,
            serviceProvider,
            date,
            startTime,
            endTime,
            status: status || 'pending',
            service,
            price,
        });
        

        const savedAppointment = await newAppointment.save();

        res.status(201).json({ message: 'Appointment created successfully', appointment: savedAppointment });
    } catch (error: any) {
        console.log('Error creating appointment:', error.message);
        res.status(500).json({ message: 'Failed to create appointment' });
    }
};
