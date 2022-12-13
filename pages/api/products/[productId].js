import { getProductsData } from ".";

function handler(req, res) {

    if (req.method === "GET") {
        let productId = req.query.productId;
        let products = getProductsData()
        let product = products.find(product => product.id === productId)

        if (product) {
            res.status(200).json({ product, message: "product loaded successfully" })
        } else {
            res.status(200).json({ message: "didn't find any product with this id" })
        }
    }
}

export default handler;