import Product from '../../../database/Models/Product'
import { closeConnection, connectDatabase } from '../../../util/database-util'

async function handler(req, res) {

    await connectDatabase('nikes_shoes_shop')

    if (req.method === "GET") {

        const products = await Product.find()
        console.log(products);
        res.status(200).json({ products })
    }

    if (req.method === "POST") {

        let formData = req.body;

        console.log(formData);
        let newProduct = await Product.create(formData)

        res.status(201).json({ product: newProduct, message: "product created successfully" })
    }

    // if (req.method === "DELETE") {
    //     let data = JSON.parse(req.body);
    //     let docId = data.id

    //     let result = await deleteDocument(client, 'products', docId)

    //     res.status(200).json({ result, message: "product deleted successfully" })
    // }

    closeConnection()
}

export default handler;