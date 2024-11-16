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