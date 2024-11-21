import mongoose,{model, Schema } from "mongoose";

export const AppointmentSchema =new Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true 
    },
    serviceProvider:{
        type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true
    },
    date:{
        require:true,
        type:String,
    },
    startTime:{
        require:true,
        type:String,
    },
    endTime:{
        require:true,
        type:String,
    },
    status:{
        require:true,
        type:String,
    },
    price:{
        require:true,
        type:Number,
    },
    rating:{
        type:String,
    },
    review:{
        type:String,
    },
});


export const AppointmentModel=model("appointment",AppointmentSchema);

// - client: reference to the client
// - serviceProvider: reference to the service provider
// - date: date of the appointment
// - startTime: time of the appointment
// - endTime: end time of the appointment
// - status: status of the appointment (pending, confirmed, canceled)
// - service: reference to the service
// - price: price of the service
// - rating: rating of the service provider by the client
// - review: review of the service provider by the client