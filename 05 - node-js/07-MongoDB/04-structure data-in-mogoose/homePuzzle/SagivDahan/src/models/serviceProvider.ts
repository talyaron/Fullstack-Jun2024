import { model, Schema } from 'mongoose';

type User = {
    id: string;
    firstName: string;
};

export const users: User[] = [];

export const ServiceProviderSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    services: {
        type: Array,
        required: true,
    }
});

export const svpModel = model('ServiceProviders', ServiceProviderSchema);