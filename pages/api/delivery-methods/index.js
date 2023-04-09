import { closeConnection, connectDatabase } from '../../../util/database-util';
import Delivery from '../../../database/Models/Delivery';

async function handler(req, res) {


    if (req.method === "GET") {

        await connectDatabase(process.env.DB_NAME)

        let methods = await Delivery.find()
        let sortedMethods = methods.sort((a, b) => a.price - b.price)

        // closeConnection()

        return res.status(200).json({ message: "delivery methods loaded successfully", methods: sortedMethods })
    }
}

export default handler;