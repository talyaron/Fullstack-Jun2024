import { model, Schema } from "mongoose";

const clientSchema = new Schema({
    name:{
        require:true,
        type:String,
    },
    phoneNumber:{
        require:true,
        type:String,
    },
    password:{
        require:true,
        type:String,
    }, key:{
        require:false,
        type:String,
    },
});

export const ClientModel=model("Client",clientSchema);