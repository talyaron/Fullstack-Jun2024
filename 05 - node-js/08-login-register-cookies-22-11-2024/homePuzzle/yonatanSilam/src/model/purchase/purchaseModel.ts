import { model, Schema } from "mongoose";

export const PurchaseSchema = new Schema({
    productId:{type:Schema.Types.ObjectId, ref:"Product"},
    clientId:{type:Schema.Types.ObjectId, ref:"Client"},
})

export const PurchaseModel = model("Purchase", PurchaseSchema); // the connection to the DB collection