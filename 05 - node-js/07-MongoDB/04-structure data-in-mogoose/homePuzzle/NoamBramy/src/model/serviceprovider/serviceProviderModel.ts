import { Schema, model } from 'mongoose';

const ServiceProviderSchema = new Schema({
  name: { type: String, required: true },
});

export const ServiceProviderModel = model("ServiceProvider", ServiceProviderSchema);
