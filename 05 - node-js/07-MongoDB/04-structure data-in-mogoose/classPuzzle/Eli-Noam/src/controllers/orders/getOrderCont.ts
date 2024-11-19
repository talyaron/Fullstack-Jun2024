import { OrderModel } from "../../model/orders/orderModel";

export async function getOrders(req: any, res: any) {

    try {
        const { clientID } = req.query;
        if (!clientID) {
            return res.status(400).json({ message: 'clientID is required' });
        }
        const orders = await OrderModel.find({ clientID: clientID }).populate('clientID').exec();
        res.status(200).json({orders});
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}