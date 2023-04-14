import Delivery from "../../../database/Models/Delivery";
import DiscountCode from "../../../database/Models/DiscountCode";
import Order from "../../../database/Models/Order";
import Payment from "../../../database/Models/Payment";
import useAuth from "../../../hooks/useAuth";
import { connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    if (req.method === "POST") {

        let inputs = req.body;
        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            return res.status(403).json({ message: "not authorized!" })
        }

        let order = await Order.findById(inputs.orderId).populate([
            { path: 'delivery', model: Delivery },
            { path: 'discountCode', model: DiscountCode },
        ]).exec()

        if (!order) {
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

        let total = order.payAmount + order.delivery.price + order.tax;
        let discountCodeAmount = order.discountCode ? (total * order.discountCode.percentage / 100) : 0
        inputs.amount = total - discountCodeAmount

        let newPayment = await Payment.create(inputs)

        let paymentIds = orderPayments.map(payment => payment._id);
        paymentIds = [...paymentIds, newPayment._id]

        await Order.updateOne({ _id: order._id }, { $set: { payments: paymentIds, paymentStatus: newPayment.status, status: newPayment.status === 1 ? 0 : null } })

        return res.status(201).json({ message: "payment created successfully", payment: newPayment })
    }


}

export default handler;