import {Schema, model} from 'mongoose'


export interface Admin extends Document {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profession: string;
    role: string;
    yearOfBirth: number;
}

export const AdminSchema = new Schema({
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
    profession: {type:String,
        unique: true
    },
    role: {type:String,
        unique: true
    },
    yearOfBirth: Number,
    password: String
})

export const AdminModel = model<Admin>("Admin", AdminSchema);
