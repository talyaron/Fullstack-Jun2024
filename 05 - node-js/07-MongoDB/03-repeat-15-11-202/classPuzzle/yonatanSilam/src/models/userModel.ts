import { Schema,model } from "mongoose";


export const UserSchema = new Schema({
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
        unique:true,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    yearOfBirth:Number,
    password:String
    
    
})

export const UserModel = model("Client", UserSchema);
