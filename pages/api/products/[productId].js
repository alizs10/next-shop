import Product from "../../../database/Models/Product";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    await connectDatabase(process.env.DB_NAME)

    console.log(req.query);
    if (req.method === "DELETE") {
        let { productId } = req.query;
        await Product.findById(productId).remove()

        res.status(200).json({ message: "product deleted successfully" })
    }

    res.status(201)
    closeConnection()
}

export default handler;