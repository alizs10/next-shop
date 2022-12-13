import fs from 'fs'
import path from 'path'

export function getProductsData() {
    let databaseFilePath = path.join(process.cwd(), 'database', 'data.json')
    let dataFile = fs.readFileSync(databaseFilePath)
    let data = JSON.parse(dataFile)
    return data.products
}


function handler(req, res) {
    if (req.method === "GET") {
        let data = getProductsData()
        res.status(200).json({ products: data })

    } else {
        res.status(200).json({ message: "this is working" })
    }
}

export default handler;