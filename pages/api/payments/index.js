import Order from "../../../database/Models/Order";
import Payment from "../../../database/Models/Payment";
import useAuth from "../../../hooks/useAuth";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    if (req.method === "POST") {

        let inputs = req.body;
        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            // closeConnection()
            return res.status(403).json({ message: "not authorized!" })
        }

        let order = await Order.findById(inputs.orderId).populate(['delivery', 'payments']).exec()

        if (!order) {
            // closeConnection()
            return res.status(404).json({ message: "order not found!" })
        }
        let orderPayments = [...order.payments];
        if (orderPayments.length > 0) {

            let isPaid = orderPayments.find(payment => payment.status)
            if (isPaid) {
                return res.status(400).json({ message: "order is already paid!" })
            }
        }

        inputs.user = user._id;
        inputs.order = order._id;
        inputs.paymentDate = Date.now()
        inputs.amount = order.payAmount + order.tax + order.delivery.price

        let newPayment = await Payment.create(inputs)

        let paymentIds = orderPayments.map(payment => payment._id);
        paymentIds = [...paymentIds, newPayment._id]

        await Order.updateOne({ _id: order._id }, { $set: { payments: paymentIds, paymentStatus: newPayment.status, status: newPayment.status === 1 ? 0 : null } })
        // closeConnection()

        return res.status(201).json({ message: "payment created successfully", payment: newPayment })
    }


}

export default handler;