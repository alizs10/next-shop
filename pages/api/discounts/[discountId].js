import DiscountCode from "../../../database/Models/DiscountCode"
import useAuth from "../../../hooks/useAuth";
import { connectDatabase } from "../../../util/database-util";

async function handler(req, res) {


    if (req.method === "DELETE") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        let { discountId } = req.query;

        if (!user || user.role !== 'admin') {
            return res.status(403).send({ message: "not authorized!" })
        }

        await DiscountCode.deleteOne({ _id: discountId })

        return res.status(200).json({ message: "discounts deleted successfully" })
    }

}

export default handler;