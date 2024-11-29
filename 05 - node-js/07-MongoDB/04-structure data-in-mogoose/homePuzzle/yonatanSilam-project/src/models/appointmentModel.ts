import mongoose, { Schema } from 'mongoose';

export interface IAppointment extends Document {
    userID: string;
    serviceProviderID: number;
    date: Date;
    startTime: number;
    endTime: number;
    status:string;
} 
const appointmentSchema: Schema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, 
    serviceProviderID: { type: mongoose.Schema.Types.ObjectId, ref: 'serviceProvider', required: true }, 
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
        type:String
    },
});

const appointmentModel = mongoose.model('appointment', appointmentSchema);

export default appointmentModel;