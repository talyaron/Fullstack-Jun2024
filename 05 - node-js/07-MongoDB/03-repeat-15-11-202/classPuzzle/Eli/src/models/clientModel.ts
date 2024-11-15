import {  model, Schema } from "mongoose";


export const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    appointmentDate: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

export const ClientModel=model("Client",ClientSchema);


