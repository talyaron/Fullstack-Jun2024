import mongoose, { Schema, model } from 'mongoose';

export const appointmentSchema = new Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    serviceProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'canceled'], default: 'pending' },
    service: { type: String, required: true },
    price: { type: Number, required: true },
  });
  export const AppointmentModel = model('Appointment', appointmentSchema);