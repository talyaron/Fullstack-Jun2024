import { model, Schema } from 'mongoose';

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: number;
    isProvider: boolean;
    services: string[];
};

export const users: User[] = [];

export const UserSchema = new Schema({
    id: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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
        type: Number,
        required: true, 
    },
    isProvider: {
        type: Boolean,
    },
    services: {
        type: Array,
    }
});

export const userModel = model('User', UserSchema);