import { model, Schema } from 'mongoose';

type User = {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;
    // appointments: Appointment[];
};


export const users: User[] = [];

export const UserSchema = new Schema({
    userName: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string', 
        required: true
    },
    email: {
        type: 'string', 
        required: true,
    },
    isAdmin: {
        type: 'boolean', 
        required: true,
    }
});

export const userModel = model('User', UserSchema);