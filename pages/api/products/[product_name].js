import { MongoClient } from "mongodb";

async function handler(req, res) {

    const client = await MongoClient.connect('mongodb://localhost:27017/nikes_shoes_shop');
    const db = client.db()

    if (req.method === "GET") {
        
        let productName = req.query.product_name;
        const product = await db.collection("products").find({name: productName}).toArray()

        if (product) {
            res.status(200).json({ product, message: "product loaded successfully" })
        } else {
            res.status(200).json({ message: "didn't find any product with this id" })
        }
    }
}

export default handler;