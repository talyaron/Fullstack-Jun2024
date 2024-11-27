import { model, Schema } from "mongoose";

const ClientSchema = new Schema({
    name:{
        require:true,
        type:String,
    },
    phoneNumber:{
        require:true,
        type:String,
        unique:true
    },
    password:{
        require:true,
        type:String,
        unique:false,
    }
});

export const ClientModel=model("Client",ClientSchema);