import { AppointmentsModel } from "../../model/appointments/appointmentsModel";

export async function setAppointments(req:any, res:any){
    try{
        const { userId,
                serviceProviderId,
                date,
                startTime,
                endTime,
                status,
                service,
                price,
                rating,
                review } = req.body;
                
        // if(!userId || !serviceProviderId || !date || !startTime ||!endTime || !service || !price || !rating || !review)
        //     return res.status(400).json({message: 'Please provide all required fields'});
    

        const newAppointment = await AppointmentsModel.create({
            userId,
            serviceProviderId,
            date,
            startTime,
            endTime,
            status,
            service,
            price,
            rating,
            review
        })

        if (!newAppointment)
            return res.status(500).json({message: 'Failed to create new appointment'});

        console.log("server recived new Appointment : " + newAppointment);

        res.json(newAppointment);
    }
    catch (error: any) {
        console.error(error);
        return res.status(500).send({error: error.message});
    }
}