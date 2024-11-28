import { model, Schema } from 'mongoose';

type service = {
    id: string;
    price: number;
    serviceName: string;
};


export const service: service[] = [];

export const ServiceSchema = new Schema({
    id: {
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
    
});

export const ServiceModel = model('Services', ServiceSchema);