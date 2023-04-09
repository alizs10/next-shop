import { connectDatabase } from "../../../util/database-util";
import Order from '../../../database/Models/Order';
import Address from "../../../database/Models/Address";
import useAuth from "../../../hooks/useAuth";

async function handler(req, res) {

    if (req.method === "GET") {

        let { orderId } = req.query

        await connectDatabase(process.env.DB_NAME)

        let order = await Order.findById(orderId).populate(['items', 'delivery', 'address', 'payments']).exec()
        if (!order) {
            return res.status(404).send({ message: "order not found!" })
        }


        let orderPayments = [...order.payments];
        if (orderPayments.length > 0) {
            let isPaid = orderPayments.find(payment => payment.status)
            if (isPaid) {
                return res.status(308).json({ message: "order is already paid!", redirect: "/checkout?transactionId=" + isPaid._id })
            }
        }

        // closeConnection()

        return res.status(200).json({ message: "order loaded successfully", order })
    }

    if (req.method === "PUT") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        let { orderId } = req.query
        let { addressId, deliveryId } = req.body
        let address = await Address.findOne({ _id: addressId, user: user._id })

        if (!address) {
            // closeConnection()
            return res.status(422).json({ message: "address not found!" })
        }

        await Order.updateOne({ _id: orderId }, { $set: { address: addressId, delivery: deliveryId } })

        let order = await Order.findById(orderId).populate(['items', 'address', 'delivery']).exec()

        // closeConnection()
        return res.status(200).json({ message: "order updated successfully", order })
    }

}

export default handler;