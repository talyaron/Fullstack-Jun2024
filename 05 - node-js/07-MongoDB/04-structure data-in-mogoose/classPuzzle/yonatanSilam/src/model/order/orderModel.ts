import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
    client: mongoose.Schema.Types.ObjectId;
    product: mongoose.Schema.Types.ObjectId;
}

const orderSchema: Schema = new Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true }, 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
});

const orderModel = mongoose.model<IOrder>('order', orderSchema);

export default orderModel;