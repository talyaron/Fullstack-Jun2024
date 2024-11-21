import { AppointmentModel } from "../../model/appointment/appointmentModel";


export async function addAppointment(req: any, res: any) {
    try {
        const {  client,
            admin,
            service,
            date,
            time,
            status,
            rating,
            review,} = req.body;

        if (!client || !service || !admin || !date || !time ) {
            return res.status(400).send({ error: "Missing required fields." });
        }

        const result = await AppointmentModel.create({
            client,
                admin,
                service,
                date,
                time,
                status,
                rating,
                review,
      
        });

        if (!result) {
            return res.status(400).send({ error: "Failed to create appointment." });
        }

        return res.status(201).send({ message: "Appointment added successfully", appointment: result });
    } catch (error: any) {
        console.error("Error in addAppointment:", error);

        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            return res.status(400).send({ error: `${duplicateField} already exists.` });
        }

        return res.status(500).send({ error: "Internal Server Error" });
    }
}


export async function getAppointmentById(req: any, res: any) {
    try {
        const { id } = req.params;
        const Appointment = await AppointmentModel.findById(id);

        if (!Appointment) {
            return res.status(404).send({ error: "Appointment not found" });
        }

        return res.status(200).send(Appointment);
    } catch (error) {
        console.error("Error in getAppointmentById:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}



export async function deleteAppointment(req: any, res: any) {
    const { id } = req.body;
    try {
        console.log(`Deleting appointment with id: ${id}`);

        const Appointment = await AppointmentModel.findById(id);
        if (!Appointment) {
            console.log(`Appointment with id ${id} not found`);
            return res.status(401).json({ error: "Appointment not found" });
        }

        await AppointmentModel.findByIdAndDelete(id);
        console.log(`Appointment with id ${id} deleted`);
        res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function editAppointment(req: any, res: any) {
    const { id,client, admin, service, date, time, status, rating, review,} = req.body;

    try {
        console.log(`Editing appointment with id: ${id}`);
        
        const updatedAppointmentFields: Partial<{ client: string;
            admin: string;
            service: string;
            date: string;
            time: string;
            status: string;
            rating: number;
            review: string; }> = {};
            if (client !== undefined) updatedAppointmentFields.client = client;
            if (admin !== undefined) updatedAppointmentFields.admin = admin;
            if (service !== undefined) updatedAppointmentFields.service = service;
            if (date !== undefined) updatedAppointmentFields.date = date;
            if (time !== undefined) updatedAppointmentFields.time = time;
            if (status !== undefined) updatedAppointmentFields.status = status;
            if (rating !== undefined) updatedAppointmentFields.rating = rating;
            if (review !== undefined) updatedAppointmentFields.review = review;


        const updatedAppointment = await AppointmentModel.findByIdAndUpdate(id, updatedAppointmentFields, { new: true });
        
        if (!updatedAppointment) {
            console.log(`Appointment with id ${id} not found`);
            return res.status(404).json({ error: "Appointment not found" });
        }

        console.log(`Appointment with id ${id} updated`);
        res.status(200).json({ message: "Appointment updated successfully",Appointment: updatedAppointment });
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).json({ error: "Internal server error" });
    }
}


