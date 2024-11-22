import {Schema, model} from 'mongoose'


export const UserSchema = new Schema({
firstName:{
    type:String,
    require:true,
},
lastName:{
    type:String,
    require:true,
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

export const UserModel = model("user",UserSchema );