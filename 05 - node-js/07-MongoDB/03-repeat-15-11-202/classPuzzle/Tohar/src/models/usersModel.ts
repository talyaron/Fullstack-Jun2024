import { Schema, model } from "mongoose";

class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private phoneNumber: string;
    private isAdmin: boolean;
    // appointements: Appointments[];

    constructor(firstName: string, lastName: string, email: string, password: string,
         phoneNumber: string, isAdmin: boolean) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.isAdmin = isAdmin;
    }
};

export const UserSchema = new Schema({
    userFirstName: {
        type: 'string',
        required: true,
    },
    userLastName: { 
        type: 'string', 
        required: true
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


