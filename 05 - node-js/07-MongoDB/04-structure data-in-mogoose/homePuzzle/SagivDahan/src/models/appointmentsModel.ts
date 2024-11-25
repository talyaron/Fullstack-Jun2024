import { model, Schema } from 'mongoose';
import { randomUUID } from 'crypto';

type Appointments = {
    appointment_id: string;
    date: Date;
    startTime: string;
    endTime: string;
    status: string;
    serviceId: string;
    clientId: string;
    providerId: string;
    rating?: number;
    review?: string;
};


export const appointments: Appointments[] = [];

export const appointmentsSchema = new Schema({
    appointment_id: {
        type: String, 
        required: true,
        unique: true,
        default: randomUUID,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
            message: 'Invalid startTime format (use HH:mm)'
        },
    },
    endTime: {
        type: String, 
        required: true,
        validate: {
            validator: (value: string) => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
            message: 'Invalid endTime format (use HH:mm)'
        },
    },
    status: {
        type: String, 
        enum: ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELED'],
        default: 'PENDING'
    },
    serviceId: {
        type: String,
        required: true, 
    },
    clientId: {
        type: String,
        required: true, 
    },
    providerId: {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    review: {
        type: String,
    },
});

export const AppointmentsModel = model('Appointments', appointmentsSchema);