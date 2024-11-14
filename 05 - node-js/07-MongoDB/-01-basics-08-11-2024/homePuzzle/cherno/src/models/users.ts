import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

export const UserModel = model('User', UserSchema);