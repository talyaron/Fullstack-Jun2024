import { Schema, model, Document } from 'mongoose';



const AppointmentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    serviceProviderId: {
        type: Schema.Types.ObjectId;
        ref: 'serviceProvider';
    },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true }
});

export const AppointmentModel = model('Appointment', AppointmentSchema);

export default AppointmentModel;