import { ServiceProviderModel } from "../models/serviceProviderModel";

export async function checkSchedule(req:any,res:any)
{   
    try {
        const { name, date }=req.body;
       // const formattedDate = new Date(date);
       const exactDate = new Date(date);
        const  allProvider= await ServiceProviderModel.find({workDate:exactDate});
        if( allProvider.length<=0) return res.json({message:"no provider found"})
        console.log(exactDate);
        res.json({message:"here are your providers!",allProvider})
    } catch (error: any) {
     
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}