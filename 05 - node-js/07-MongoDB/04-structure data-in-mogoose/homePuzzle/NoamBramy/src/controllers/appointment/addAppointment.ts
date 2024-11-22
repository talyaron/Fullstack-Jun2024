import { AppointmentModel } from "../../model/appointment/appointmentModel";


export const addAppointment = async (req: any, res: any) => {
    try {
        const { client, serviceProvider, date, startTime, endTime, status, service, price } = req.body;

        // if (!client || !serviceProvider || !date || !startTime || !endTime || !service || !price) {
        //     return res.status(400).json({ message: 'Please provide all required fields' });
        // }

        const _isSlotFree = await isSlotFree(startTime, endTime);
        
        if (_isSlotFree === false) {
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


export async function isSlotFree(startTime: number, endTime: number):Promise<boolean> {
    try {
        const appointments = await AppointmentModel.find({ startTime: { $lt: endTime }, endTime: { $gt: startTime } });
        return appointments.length === 0;
    } catch (error: any) {
        console.log('Error creating appointment:', error.message);
        return false;

    }
}