import { connectDatabase } from '../../../util/database-util';
import useAuth from '../../../hooks/useAuth';
import CartItem from '../../../database/Models/CartItem';
import Order from '../../../database/Models/Order';

async function handler(req, res) {

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            // closeConnection()
            return res.status(403).json({ message: "not authorized!" })
        }

        let { itemsIds } = req.body;

        const items = await CartItem.find({ _id: { $in: itemsIds } }).populate('product').exec();

        let newOrderInputs = {
            user: user._id,
            items: itemsIds,
            discountAmount: 0,
            totalAmount: 0,
            payAmount: 0
        }

        items.forEach(item => {
            newOrderInputs.payAmount += item.payPrice * item.quantity
            newOrderInputs.discountAmount += item.discountAmount * item.quantity
            newOrderInputs.totalAmount += ((item.payPrice + item.discountAmount) * item.quantity)
        })


        let newOrder = await Order.create(newOrderInputs)
        let now = Date.now()
        await CartItem.updateMany({ _id: { $in: itemsIds } }, { $set: { deletedAt: now } })
        // closeConnection()

        return res.status(201).json({ message: "order created successfully", order: newOrder })
    }


}

export default handler;