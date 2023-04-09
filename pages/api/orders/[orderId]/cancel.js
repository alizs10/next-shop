import Order from "../../../../database/Models/Order";
import useAuth from "../../../../hooks/useAuth";
import { connectDatabase } from "../../../../util/database-util";

async function handler(req, res) {

    if (req.method === "PUT") {

        await connectDatabase(process.env.DB_NAME)

        let { orderId } = req.query
        let user = await useAuth(req)

        if (!user) {
            return res.status(403).json({ message: "not authorized!" })
        }

        let order = await Order.findById(orderId)

        if (!order) {
            return res.status(404).json({ message: "order not found!" })
        }

        await Order.updateOne({ _id: orderId, user: user._id }, { $set: { status: 4, paymentStatus: 2 } })
        let updatedOrder = { ...order, status: 4, paymentStatus: 2 }

        return res.status(200).json({ message: "order canceled successfully", order: updatedOrder })
    }

}


export default handler;