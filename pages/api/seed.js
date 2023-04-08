import Delivery from "../../database/Models/Delivery";
import { closeConnection, connectDatabase } from "../../util/database-util";

async function handler(req, res) {

    if (req.method === "GET") {

        await connectDatabase(process.env.DB_NAME)

        // let inputs = [
        //     {
        //         name: "Free shipping",
        //         time: "5-7 Days",
        //         price: 0
        //     },
        //     {
        //         name: "USDP",
        //         time: "3-5 Days",
        //         price: 7.5
        //     },
        //     {
        //         name: "FedEx",
        //         time: "1-3 Days",
        //         price: 16.75
        //     }
        // ]

        let deliveries = await Delivery.find()

        closeConnection()

        return res.status(200).json({ message: "deliveries loaded!", deliveries })

    }

}

export default handler;