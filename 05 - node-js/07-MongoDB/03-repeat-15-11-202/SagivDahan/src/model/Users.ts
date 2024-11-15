import { model, Schema } from "mongoose";
//User Class
class User {
    private username: string;
    private email: string;
    private password: string;
    private isAdmin: boolean;
    private phoneNumber: number;

    constructor(name: string, email: string, password: string, isAdmin: boolean, phoneNumber: number) {
        this.username = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.phoneNumber = phoneNumber;
    }
}

//User Schema
export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
    }
})

//User Model 
export const UserModel = model('User', UserSchema); 