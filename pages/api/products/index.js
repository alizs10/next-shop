import fs from 'fs'
import path from 'path'

import { MongoClient } from 'mongodb'
import { connectDatabase, getDocuments } from '../../../util/database-util'

export function getProductsData() {
    let databaseFilePath = path.join(process.cwd(), 'database', 'data.json')
    let dataFile = fs.readFileSync(databaseFilePath)
    let data = JSON.parse(dataFile)
    let sortedData = data.products.sort((a, b) => a.id - b.id)
    return sortedData
}



async function handler(req, res) {

    let client = await connectDatabase('nikes_shoes_shop')

    if (req.method === "GET") {

        let documents = getDocuments(client,'products')
        res.status(200).json({ products: documents })
    }

    if (req.method === "POST") {
        let data = JSON.parse(req.body);
        //validate data
        if (data.name === "" || data.name.trim() === "" ||
            data.price === "" || data.price.trim() === "" ||
            data.discountPercentage === "" || data.discountPercentage.trim() === "" ||
            data.marketableNumber === "" || data.marketableNumber.trim() === "" ||
            data.soldNumber === "" || data.soldNumber.trim() === "" ||
            data.frozenNumber === "" || data.frozenNumber.trim() === "" ||
            data.image === "" || data.image.trim() === "" ||
            data.colors.length == 0 ||
            data.sizes.length == 0
        ) {
            client.close()
            res.status(422).json({ message: "unvalid data" })
            return
        }

        const result = await db.collection('products').insertOne(data)
        data._id = result.insertedId
        client.close()

        res.status(201).json({ product: data, message: "product created successfully" })
    }
}

export default handler;