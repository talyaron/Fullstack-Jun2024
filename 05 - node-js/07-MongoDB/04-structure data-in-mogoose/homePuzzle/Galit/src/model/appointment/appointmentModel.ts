import { Schema, model } from "mongoose";

export interface Appointment extends Document {
  client: string;
  admin: string;
  service: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: string;
  rating: string;
  review: string;
}

export const AppointmentSchema = new Schema({
    client: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    required: true,
  },
  service: { type: String, required: true },
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
