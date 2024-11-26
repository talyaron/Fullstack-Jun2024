import { AppointmentModel } from "../../model/apointment/apointmentModel.ts";

export async function addAppointment(req: any, res: any) {
    try {
        const {
            clientId,
            providerId,
            date,
            startTime,
            endTime,
            status,
            service,
            price,
            rating,
            review
        } = req.body;

        const getAppointmentInTime = await AppointmentModel.find({
            date: {date},
            startTime: {$gt: endTime},
            endTime: {$lt: startTime}
        });

        if(getAppointmentInTime.length > 0){
            return res.status(400).send({error:"Appointment already exists in this time period"})
        }

        //send request to DB
        const result = await AppointmentModel.create({
            clientId,
            providerId,
            date,
            startTime,
            endTime,
            status,
            service,
            price,
            rating,
            review
        })
        console.log(result)
        if(!result){
            return res.status(400).send({error:"Couldn't create new user"})
        }

        return res.status(201).send({message:"Client created successfully"})


    } catch (error:any) {
        console.error(error)
        return res.status(500).send({error:error.message})
    }
}