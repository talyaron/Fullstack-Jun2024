import {Schema, model} from 'mongoose';

export const ClientSchema = new Schema({
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
    password:{
        type:String,
        unique:true
    },
})

export const ClientModel = model("Client", ClientSchema); // the connection to the DB collection