import { PurchaseModel } from "../../model/purchase/purchaseModel";

export async function getUserCartProducts(req:any, res:any) {
    try {
        const {user} = req.cookies;
        if(!user) throw new Error("Missing User cookie");

        const userPurchases = await PurchaseModel.find({
            userId: user.id, 
            status: "in-cart",
        }).populate("productId");

        if (!userPurchases || userPurchases.length === 0) {
            return res.status(404).json({ message: "No products found for this user" });
        };

        res.status(200).json({message: "Fetching Cart Products"});


    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
        
    };
};


export async function getUserPurchases(req:any, res:any) {
    try {
        const {user} = req.cookies;
        if(!user) throw new Error("Missing User cookie");

        const userPurchases = await PurchaseModel.find({
            userId: user.id, 
            status: "purchased",
        }).populate("productId");

        res.status(200).json({message: "Fetching Purchased Products"});

        if (!userPurchases || userPurchases.length === 0) {
            return res.status(404).json({ message: "No products found for this user" });
        };

    } catch (error:any) {
        console.error(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
        
    };
}