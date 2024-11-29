import Product from "../../model/products/productModel";

export function getMyProducts(req: any, res: any) {
    try {
        const { user } = req.cookies;
        console.log(user);
        res.json({ message: "Get all products", useId: user });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: `Internal server error ${error.message} ` });
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