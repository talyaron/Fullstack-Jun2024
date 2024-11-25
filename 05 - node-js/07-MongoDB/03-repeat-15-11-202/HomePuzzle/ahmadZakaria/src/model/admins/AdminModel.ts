import {Schema, model} from 'mongoose'

export interface Admin extends Document { 
    adminName: string;
    adminEmial : string;
    adminPhone : string;
    adminProfession : string;
    adminRole : string;
    adminYearOfBirth: number;


}

export const AdminSchema = new Schema({
    adminName:{
        type: String,
        required: true
    },
    adminEmial:{
        type: String,
        required: true
    },
    adminPhone:{
        type: String,
        required: true
    },
    adminProfession:{
        type: String,
        required: true
    },

    adminRole:{
        type: String,
        required: true
    },

    AdminYearOfBirth: Number,
    password: String

})

export const AdminModel = model<Admin>("Admin", AdminSchema);