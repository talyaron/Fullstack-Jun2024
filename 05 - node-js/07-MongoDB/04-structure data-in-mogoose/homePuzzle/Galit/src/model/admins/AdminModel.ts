import {Schema, model} from 'mongoose'


export interface Admin extends Document {
    AdminFirstName: string;
    AdminLastName: string;
    AdminEmail: string;
    AdminPhone: string;
    AdminProfession: string;
    AdminRole: string;
    AdminYearOfBirth: number;
}

export const AdminSchema = new Schema({
    AdminFirstName:{
type: String,
required: true
    },
    AdminLastName:{
        type: String,
        required: true
    },
    AdminEmail: {type:String,
        required: true
    },
    AdminPhone: {type:String,
        required: true
    },
    AdminProfession: {type:String,
        required: true
    },
    AdminRole: {type:String,
        required: true
    },
    AdminYearOfBirth: Number
})

export const AdminModel = model<Admin>("Admin", AdminSchema);
