import { Schema, model } from "mongoose";

export const ServiceProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  imageUrl: String,
  yearOfBirth: Number,
  password: {
    type: String,
    required: true,
  },
});

export const serviceProviderModel = model(
  "serviceProvider",
  ServiceProviderSchema
);
