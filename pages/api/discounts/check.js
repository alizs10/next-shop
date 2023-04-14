import Order from "../../../database/Models/Order";
import DiscountCode from "../../../database/Models/DiscountCode";
import useAuth from "../../../hooks/useAuth";
import { connectDatabase } from "../../../util/database-util";
import { dateComparison } from "../../../helpers/helpers";
import UserDiscountCode from "../../../database/Models/UserDiscountCode";

async function handler(req, res) {

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)
        let user = await useAuth(req)

        if (!user) {
            return res.status(403).send({ message: "not authorized!" })
        }

        let { orderId, discountCode } = req.body;


        // 1- check if order exists and discount code is valid(exist and valid)
        let order = await Order.findById(orderId).populate(['items', 'address', 'delivery']).exec()

        if (!order) {
            return res.status(404).send({ message: "order not found!" })
        }

        let discount = await DiscountCode.findOne({ code: discountCode })

        let now = Date.now();
        if (!discount || (discount && (!discount.status || dateComparison(now, discount.validFrom) === '<' || dateComparison(now, discount.validUntil) === '>'))) {
            return res.status(404).send({ message: "code is invalid!" })
        }

        // 2- check if user already used this code
        let userDiscountCode = await UserDiscountCode.findOne({ user: user._id, discountCode: discount._id }).populate({ path: 'order', model: Order }).exec()

        console.log(userDiscountCode);
        if (userDiscountCode && userDiscountCode.order.paymentStatus === '1') {
            return res.status(400).send({ message: "code is used before!" })
        }

        // 3- update order with discount code
        await Order.updateOne({ _id: orderId }, { $set: { discountCode: discount._id } })
        await UserDiscountCode.create({ user: user._id, discountCode: discount._id, order: order._id })

        return res.status(200).send({ message: "code successfully activated!" })

    }


}

export default handler;