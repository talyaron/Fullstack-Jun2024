import { PurchaseModel } from "../../model/purchase/purchaseModel";

export async function addToCart(req:any, res:any) {
    try {
        const {user} = req.cookies;
        const {productId} = req.body;

        if(!productId || !user) throw new Error("Missing required information");

        await PurchaseModel.create({productId, clientId: user})
        res.status(200).json({message: "Product added to cart"});

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
        
    }
}