import { model, Schema } from "mongoose";

const serviceProviderSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  phoneNumber: {
    require: true,
    type: String,
  },
//   workDate: {
//     require: true,//for now they work everyday of the week :) 
//     type: String,
//   },
  password: {
    require: true,
    type: String,
  },
  key: {
    require: false,
    type: String,
  },
});

export const ServiceProviderModel = model(
  "ServiceProvider",
  serviceProviderSchema
);
