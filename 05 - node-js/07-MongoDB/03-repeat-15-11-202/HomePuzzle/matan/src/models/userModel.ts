import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    yearOfBirth: { type: Number, required: true },
    password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema);
