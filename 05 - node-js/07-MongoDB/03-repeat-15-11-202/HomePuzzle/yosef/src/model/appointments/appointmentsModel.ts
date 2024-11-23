import mongoose, { Schema, model } from "mongoose";
import { ClientModel } from "../users/ClientModel";
import { ServiceProviderModel } from "../serviceProvider/serviceProviderModel";

export const AppointmentsSchema = new Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true},
    serviceProviderId:{type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider' , required: true},
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    service: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    review: {
        type: String
    }
})

export const AppointmentsModel = mongoose.model("Appointments", AppointmentsSchema);

export default AppointmentsModel;

