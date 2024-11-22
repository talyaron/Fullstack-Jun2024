import {Schema, model} from 'mongoose';

export const ClientSchema = new Schema({
    id: { type: String, required: true },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        unique:true
    },
    yearOfBirth:Number,
    password:String,
})

export const ClientModel = model("Client", ClientSchema); // the connection to the DB collection