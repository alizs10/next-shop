import { Product } from '../../../database/Models/Product'
import { closeConnection, connectDatabase } from '../../../util/database-util'

async function handler(req, res) {

    await connectDatabase('nikes_shoes_shop')

    if (req.method === "GET") {

        const products = await Product.find()
        console.log(products);
        res.status(200).json({ products })
    }

    // if (req.method === "POST") {
    //     let data = JSON.parse(req.body);
    //     //validate data
    //     if (data.name === "" || data.name.trim() === "" ||
    //         data.price === "" || data.price.trim() === "" ||
    //         data.discountPercentage === "" || data.discountPercentage.trim() === "" ||
    //         data.marketableNumber === "" || data.marketableNumber.trim() === "" ||
    //         data.soldNumber === "" || data.soldNumber.trim() === "" ||
    //         data.frozenNumber === "" || data.frozenNumber.trim() === "" ||
    //         data.description === "" || data.description.trim() === "" ||
    //         data.image === "" || data.image.trim() === "" ||
    //         data.gallery.length == 0 ||
    //         data.colors.length == 0 ||
    //         data.sizes.length == 0
    //     ) {
    //         client.close()
    //         res.status(422).json({ message: "unvalid data" })
    //         return
    //     }

    //     const document = await insertDocument(client, 'products', data)
    //     data._id = document.insertedId

    //     res.status(201).json({ product: data, message: "product created successfully" })
    // }

    // if (req.method === "DELETE") {
    //     let data = JSON.parse(req.body);
    //     let docId = data.id

    //     let result = await deleteDocument(client, 'products', docId)

    //     res.status(200).json({ result, message: "product deleted successfully" })
    // }

    closeConnection()
}

export default handler;