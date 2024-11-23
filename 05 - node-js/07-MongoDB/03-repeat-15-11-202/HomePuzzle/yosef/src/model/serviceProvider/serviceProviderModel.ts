import {Schema, model} from 'mongoose';

export const ServiceProvider = new Schema({
    id: { type: String, required: true },
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
    price:{
        type:Number,
        required:true
    },
    averageRating:{
        type:Number,
        default: 0
    }
})

export const ServiceProviderModel = model("ServiceProvider", ServiceProvider); // the connection to the DB collection