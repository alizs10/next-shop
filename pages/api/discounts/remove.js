import Order from '../../../database/Models/Order';
import UserDiscountCode from '../../../database/Models/UserDiscountCode';
import useAuth from '../../../hooks/useAuth';
import { connectDatabase } from '../../../util/database-util';

async function handler(req, res) {

    if (req.method === "POST") {

        let { orderId } = req.body;

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            return res.status(403).json({ message: "not authorized!" })
        }

        let order = await Order.findOne({ _id: orderId, user: user._id })

        if (!order) {
            return res.status(404).json({ message: "order not found!" })
        }

        if (!order.discountCode) {
            return res.status(200).json({ message: "discount code deactivated!" })
        }


        await Order.updateOne({ _id: order._id, user: user._id }, { $set: { discountCode: null } })
        await UserDiscountCode.deleteOne({ _id: order.discountCode, user: user._id, order: orderId })

        return res.status(200).json({ message: "discount code deactivated!" })
    }

}

export default handler;