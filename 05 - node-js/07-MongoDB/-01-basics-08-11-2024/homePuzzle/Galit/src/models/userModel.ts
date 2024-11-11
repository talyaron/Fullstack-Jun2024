import { model, Schema } from 'mongoose';
import crypto from 'crypto';

export class User {
    id: string;
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.id = crypto.randomUUID(); 
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

export const users: User[] = []; 

export const UserSchema = new Schema({
    username: {
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
    }
});

export const UserModel = model('User', UserSchema);

