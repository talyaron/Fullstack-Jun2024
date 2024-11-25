import {Schema, model} from 'mongoose';

export interface Client extends Document{
    name:string;
    email:string;
    phone:string;
}

export const ClientSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
})
export const ClientModel = model<Client> ("Client",ClientSchema);
