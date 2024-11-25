import { model, Schema } from "mongoose";


export const ServiceProviderSchema = new Schema({
id: String,
firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
serviceId:String
})

export const ServiceProviderModel = model("serviceProvider", ServiceProviderSchema);
