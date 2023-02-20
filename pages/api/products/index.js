import Product from '../../../database/Models/Product'
import { closeConnection, connectDatabase } from '../../../util/database-util'

async function handler(req, res) {

    await connectDatabase('nikes_shoes_shop')

    if (req.method === "GET") {

        const products = await Product.find().populate('colors').populate('sizes').exec()
        res.status(200).json({ products })
    }

    if (req.method === "POST") {

        let formData = req.body;
        let newProduct = await Product.create(formData)

        res.status(201).json({ product: newProduct, message: "product created successfully" })
    }

    closeConnection()
}

export default handler;