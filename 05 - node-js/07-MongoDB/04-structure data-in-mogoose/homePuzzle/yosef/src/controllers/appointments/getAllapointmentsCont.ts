import { AppointmentsModel } from "../../model/appointments/appointmentsModel";

export async function getAllAppointments(req:any, res:any){
    try {
        const appointments = await AppointmentsModel.find()
        res.json({ appointments });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving appointments" });
    }
}