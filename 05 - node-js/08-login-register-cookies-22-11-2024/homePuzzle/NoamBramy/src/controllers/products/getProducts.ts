import Product from "../../model/products/productModel";
import { PurchaseModel } from "../../model/purchase/purchaseModel";

export async function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not logged in" });
        }

        const purchases = await PurchaseModel.find({ clientId: user }).populate("productId");

        if (!purchases || purchases.length === 0) {
            return res.status(404).json({ message: "No products found for this user" });
        }

        const products = purchases.map(purchase => purchase.productId);

        res.status(200).json({ message: "User's products retrieved successfully", products });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: `Internal server error: ${error.message}` });
    }
}

export async function getProducts(req: any, res: any) {
    try {
        const products = await Product.find();
        res.status(200).send({products});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
    }
}