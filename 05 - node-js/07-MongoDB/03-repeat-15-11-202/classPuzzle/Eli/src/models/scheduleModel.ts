import { model, Schema } from "mongoose";
import { ClientModel } from "./clientModel";
import { ServiceProviderModel } from "./serviceProviderModel";



export const ScheduleSchema=new Schema
({
    client:{
        require:true,
        type:ClientModel,
    },
    serviceProvider:{
        require:true,
        type:ServiceProviderModel,
    },
    Date:
    {
        require:true,
        type:Date,
    }
});

export const ScheduleModel= model("Schedule",ScheduleSchema);