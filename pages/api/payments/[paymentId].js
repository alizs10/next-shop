import { closeConnection, connectDatabase } from "../../../util/database-util";
import Payment from '../../../database/Models/Payment';

async function handler(req, res) {
    if (req.method === "GET") {

        let { paymentId } = req.query;

        await connectDatabase(process.env.DB_NAME)
        let payment = await Payment.findById(paymentId)
        // closeConnection()


        if (!payment) {
            return res.status(404).send({ message: "payment not found" })
        }

        return res.status(200).json({ message: "payment loaded successfully", payment })
    }
}

export default handler;