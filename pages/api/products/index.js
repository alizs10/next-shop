import { connectDatabase, getDocuments, insertDocument } from '../../../util/database-util'

async function handler(req, res) {

    let client = await connectDatabase('nikes_shoes_shop')

    if (req.method === "GET") {
        let documents = await getDocuments(client, 'products')
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

        const document = await insertDocument(client, 'products', data)
        data._id = document.insertedId

        res.status(201).json({ product: data, message: "product created successfully" })
    }

    client.close()
}

export default handler;