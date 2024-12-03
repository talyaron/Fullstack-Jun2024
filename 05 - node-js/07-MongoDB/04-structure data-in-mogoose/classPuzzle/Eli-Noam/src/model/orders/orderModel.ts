import mongoose, { Schema, model } from 'mongoose';

export const orderSchema = new Schema({
  status: {
    require: true,
    type: String,
  },
  clientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
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