import { model, Schema } from "mongoose";

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