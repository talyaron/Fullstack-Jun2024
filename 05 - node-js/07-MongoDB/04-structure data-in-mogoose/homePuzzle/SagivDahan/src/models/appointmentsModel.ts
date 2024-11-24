import { model, Schema } from 'mongoose';

type Appointments = {
    appointment_id: string;
    date: Date;
    startTime: string;
    endTime: string;
    status: string;
    serviceId: string;
    clientId: string;
    providerId: string;
};


export const appointments: Appointments[] = [];

export const appointmentsSchema = new Schema({
    appointment_id: {
        type: String, 
        required: true,
    },
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
        required: true,
    },
    status: {
        type: String, 
        required: true
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
    }
});

export const AppointmentsModel = model('Appointments', appointmentsSchema);