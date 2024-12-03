import { Schema, model, Types } from "mongoose";

// Define the Appointment schema
const AppointmentSchema = new Schema({
  client: {
    type: Types.ObjectId,
    ref: "Client",
    required: true,
  },
  serviceProvider: {
    type: Types.ObjectId,
    ref: "ServiceProvider",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "canceled"],
    default: "pending",
  },
  service: {
    type: Types.ObjectId,
    ref: "Service",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    maxlength: 500,
  },
});

// Export the Appointment model
export const AppointmentModel = model("Appointment", AppointmentSchema);
