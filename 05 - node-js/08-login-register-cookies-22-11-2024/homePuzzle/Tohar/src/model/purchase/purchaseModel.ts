import { model, Schema } from "mongoose";

interface Purchase extends Document {
    productId:{type:Schema.Types.ObjectId, ref:"Product"},
    clientId:{type:Schema.Types.ObjectId, ref:"Client"},
    status: {type:String}
}

export const PurchaseSchema = new Schema<Purchase>({
    productId:{type:Schema.Types.ObjectId, ref:"Product"},
    clientId:{type:Schema.Types.ObjectId, ref:"Client"},
    status: {type:String}
})

export const PurchaseModel = model("Purchase", PurchaseSchema);