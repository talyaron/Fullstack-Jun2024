import { Schema, model } from "mongoose";

// Define the ServiceProvider schema
const ServiceProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

// Export the ServiceProvider model
export const ServiceProviderModel = model(
  "ServiceProvider",
  ServiceProviderSchema
);
