import { model, Schema } from "mongoose";

export default class User {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export const users: User[] = [];

//data structure
export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const UserModel = model('User', UserSchema); 