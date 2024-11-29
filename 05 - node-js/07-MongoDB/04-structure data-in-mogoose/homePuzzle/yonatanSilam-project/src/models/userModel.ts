import { Schema,model } from "mongoose";


export const UserSchema = new Schema({
    name:{
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
    imageUrl:String,
    yearOfBirth:Number,
    password:String
    
    
})

export const UserModel = model("user", UserSchema);
