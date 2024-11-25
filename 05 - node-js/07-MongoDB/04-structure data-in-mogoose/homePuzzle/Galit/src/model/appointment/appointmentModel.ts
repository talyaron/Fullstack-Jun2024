import { Schema, model } from "mongoose";
import { Admin } from '../admins/AdminModel';
import { Service } from '../service/serviceModel'
import { Client } from "../users/ClientModel";

export interface Appointment extends Document {
  client: Client| null;
  admin: Admin | null;
  service: Service | null;
  date: Date;
  startTime: string;
  endTime: string;
  status: string;
  rating?: string;
  review?: string;
}

export const AppointmentSchema = new Schema({
    client:{
      type: Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
  },
  admin:{
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
},
  service:{
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
},
  date: { type: String, required: true },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
  rating: {
    type: String,
  },
  review: {
    type: String,
  },
});

export const AppointmentModel = model<Appointment>(
  "Appointment",
  AppointmentSchema
);
