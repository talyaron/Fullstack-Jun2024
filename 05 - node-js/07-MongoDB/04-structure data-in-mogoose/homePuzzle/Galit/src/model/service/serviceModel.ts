import {Schema, model} from 'mongoose'


export interface Service extends Document {
    name: string;
    description: string;
    duration: string;
    price: string;
}

export const ServiceSchema = new Schema({
    name:{
type: String,
required: true
    },
    description:{
        type: String,
        required: true
    },
    duration: {type:String,
        required: true
    },
    price: {type:String,
        required: true
    },
})

export const ServiceModel = model<Service>("Service", ServiceSchema);
