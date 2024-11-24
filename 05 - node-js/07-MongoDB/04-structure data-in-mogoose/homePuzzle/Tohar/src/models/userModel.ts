import { model, Schema } from 'mongoose';

type User = {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber: string;
    isProvider: boolean;
};


export const users: User[] = [];

export const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true
    },
    phoneNumber: {
        type: String,
        required: true, 
    },
    id: {
        type: String, 
        required: true,
    },
    isProvider: {
        type: Boolean,
        required: true,
    }
});

export const userModel = model('User', UserSchema);