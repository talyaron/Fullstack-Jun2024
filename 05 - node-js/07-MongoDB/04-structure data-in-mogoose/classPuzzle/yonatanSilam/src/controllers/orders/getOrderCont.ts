import orderModel from "../../model/order/orderModel";

export async function getOrderByClientId(req: any, res: any) {

    try {
        const { clientId } = req.query;
        if (!clientId) {
            return res.status(400).json({ message: 'clientId is required' });
        }
        const orders = await orderModel.find({ client: clientId }).populate('client').populate('product').exec();
        res.status(200).json({orders});
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}