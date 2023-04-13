import DiscountCode from '../../../database/Models/DiscountCode';
import useAuth from '../../../hooks/useAuth';
import { connectDatabase } from '../../../util/database-util';

async function handler(req, res) {

    if (req.method === "GET") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user || user.role !== 'admin') {
            return res.status(403).send({ message: "not authorized!" })
        }

        let discounts = await DiscountCode.find()

        return res.status(200).json({ message: "discounts loaded successfully", discounts })
    }

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user || user.role !== 'admin') {
            return res.status(403).send({ message: "not authorized!" })
        }

        let inputs = req.body;

        let newDiscount = await DiscountCode.create(inputs)

        return res.status(201).json({ message: "new discount created successfully", discount: newDiscount })
    }

}

export default handler;