import { Schema, model } from 'mongoose';

type User = {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    id: string;
};

export const users: User[] = [];

const userSchema = new Schema<User>({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
});

export const userModel = model<User>('User', userSchema);