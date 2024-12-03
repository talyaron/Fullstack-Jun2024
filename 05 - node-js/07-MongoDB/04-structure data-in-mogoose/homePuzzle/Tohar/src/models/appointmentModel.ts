import { model, Schema } from 'mongoose';
import { Service } from './ServiceModel';

type Appointment = {
    id: string;
    date: Date;
    stratTime: string;
    endTime: string;
    serviceId: string;
    status: string;
    userId?: string;
    providerId?: Service;
};

export const appointments: Appointment[] = [];

export const AppointmentSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String, 
        required: true,
    },
    endTime: {
        type: String, 
        required: true
    },
    serviceId: {
        type: String,
        required: true, 
    },
    status: {
        type: String, 
        required: true,
    },
    id: {
        type: String, 
        required: true,
    },
    userId: {
        type: String, 
        required: true,
    },
    providerId: {
        type: String, 
        required: true,
    },
});

export const AppointmentModel = model('Appointment', AppointmentSchema);