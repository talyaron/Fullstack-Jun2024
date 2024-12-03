import { AppointmentsModel } from "../../model/appointments/appointmentsModel";

export async function getAppointmentsByUserId(req:any, res:any){
    try
    {
        const { userId } = req.query;
        
        if (!userId) {
            return res.status(400).json({ message: 'userId is required' });
        }
        
        const appointments = await AppointmentsModel.find({ userId: userId }).populate('userId').populate('serviceProviderId').exec();
        res.status(200).json({ appointments });
        console.log("by user id is work");
        console.log(appointments);
        
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}