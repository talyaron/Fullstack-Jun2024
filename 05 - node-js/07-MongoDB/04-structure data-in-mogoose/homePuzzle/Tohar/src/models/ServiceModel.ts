import { model, Schema } from 'mongoose';

export type Service = {
    serviceId: string;
    serviceName: string;
    price: number;
    duration: number;
};


export const services: Service[] = [];

export const ServiceSchema = new Schema({
    serviceId: {
        type: String,
        required: true,
    },
    serviceName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    }
});

export const serviceModel = model('User', ServiceSchema);