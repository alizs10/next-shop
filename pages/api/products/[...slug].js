import { MongoClient } from "mongodb";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    await connectDatabase(process.env.DB_NAME)

    if (req.method === "GET") {
        let productName = req.query.slug;
        const product = await db.collection("products").find({ name: productName }).toArray()

        if (product) {
            res.status(200).json({ product, message: "product loaded successfully" })
        } else {
            res.status(200).json({ message: "didn't find any product with this id" })
        }
    }

    closeConnection()
}

export default handler;