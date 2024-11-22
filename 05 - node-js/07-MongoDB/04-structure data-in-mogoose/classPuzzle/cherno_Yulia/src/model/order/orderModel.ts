import mongoose, { Schema } from "mongoose";

interface Order
{
    client: mongoose.Schema.Types.ObjectId;
    product: mongoose.Schema.Types.ObjectId;
}

const OrderSchema: Schema = new Schema(
    {
        client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
    }
);

const Order = mongoose.model<Order>('Order', OrderSchema);

export default Order;