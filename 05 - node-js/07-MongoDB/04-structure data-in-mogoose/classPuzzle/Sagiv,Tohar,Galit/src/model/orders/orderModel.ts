import { Schema, model, Document } from 'mongoose';

interface Order extends Document {
    productId: string;
    clientId: string;
}

const OrderSchema = new Schema<Order>({
    productId: { type: String, required: true },
    clientId: { type: String, required: true },
});

const Order = model<Order>('Order', OrderSchema);

export default Order;