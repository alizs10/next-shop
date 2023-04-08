import { closeConnection, connectDatabase } from '../../../util/database-util';
import Delivery from '../../../database/Models/Delivery';

async function handler(req, res) {


    if (req.method === "GET") {

        await connectDatabase(process.env.DB_NAME)
        
        let methods = await Delivery.find()
        
        // closeConnection()

        return res.status(200).json({ message: "delivery methods loaded successfully", methods })
    }
}

export default handler;