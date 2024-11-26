import {Schema, model} from 'mongoose';

export const ApointmentSchema = new Schema({
    clientId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    providerId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    startTime:{
        type:Number,
        required:true
    },
    endTime:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    review:{
        type:String,
        default:''
    }
})

export const AppointmentModel = model("apointment", ApointmentSchema); // the connection to the DB collection