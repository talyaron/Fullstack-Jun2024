import {Schema, model} from 'mongoose'
import { Admin } from '../admins/AdminModel';


export interface Service extends Document {
    admin: Admin | null; 
    name: string;
    description: string;
    duration: string;
    price: string;
}

export const ServiceSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    },
    name:{
type: String,
required: true
    },
    description:{
        type: String,
        required: true
    },
    duration: {type:Number,
        required: true
    },
    price: {type:Number,
        required: true
    },
})

export const ServiceModel = model<Service>("Service", ServiceSchema);
