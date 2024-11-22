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
        unique: true
    },
    AdminPhone: {type:String,
        unique: true
    },
    AdminProfession: {type:String,
        unique: true
    },
    AdminRole: {type:String,
        unique: true
    },
    AdminYearOfBirth: Number,
    password: String
})

export const AdminModel = model<Admin>("Admin", AdminSchema);
