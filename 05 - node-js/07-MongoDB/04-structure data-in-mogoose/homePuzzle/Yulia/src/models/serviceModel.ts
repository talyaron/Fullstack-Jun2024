import { Schema, model } from "mongoose";

// Define the Service schema
const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Export the Service model
export const ServiceModel = model("Service", ServiceSchema);
