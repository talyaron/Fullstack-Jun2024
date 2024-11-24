import { model, Schema } from 'mongoose';
import { Service } from './ServiceModel';

type Provider = {
    id : string;
    serviceId: Service[];
};


export const providers: Provider[] = [];

export const ProviderSchema = new Schema({
    id: {
        type: String, 
        required: true,
    },
    ServiceId: {
        type: [String], 
        required: true,
    }
});

export const providerModel = model('User', ProviderSchema);