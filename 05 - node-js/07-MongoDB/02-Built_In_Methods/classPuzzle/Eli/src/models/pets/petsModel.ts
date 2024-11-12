import { model, Schema } from "mongoose";

export const PetSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    imageURL: String
});

export const PetModel = model('Pet', PetSchema);