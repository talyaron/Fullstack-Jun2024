import {Schema, model} from 'mongoose'


export interface Client extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    yearOfBirth: number;
}

export const ClientSchema = new Schema({
    firstName:{
type: String,
required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {type:String,
        unique: true
    },
    phone: {type:String,
        unique: true
    },
    yearOfBirth: Number,
    password: String
})

export const ClientModel = model<Client>("Client", ClientSchema);
