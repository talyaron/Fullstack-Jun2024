import { Schema, model } from "mongoose";

export const AppointmentsSchema = new Schema({
    userId: {type:Schema.Types.ObjectId, ref:"Client"},
    serviceProviderId: {type:Schema.Types.ObjectId, ref:"ServiceProvider"},
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

export const AppointmentsModel = model("Appointments", AppointmentsSchema);

