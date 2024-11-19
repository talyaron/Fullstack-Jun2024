import { model, Schema } from "mongoose";

export const orderSchema = new Schema({
  status: {
    require: true,
    type: String,
  },
  clientID: {
    require: true,
    type: String,
  },
  productID: {
    require: true,
    type: String,
  },
  date: {
    require: true,
    type: String,
  },
});

export const OrderModel =  model("Order",orderSchema);