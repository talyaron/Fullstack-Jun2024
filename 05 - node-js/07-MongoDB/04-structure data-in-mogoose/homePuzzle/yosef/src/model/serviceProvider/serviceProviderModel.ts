import {Schema, model} from 'mongoose';

export const ServiceProvider = new Schema({
    serviceProviderName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
})

export const ServiceProviderModel = model("ServiceProvider", ServiceProvider); // the connection to the DB collection