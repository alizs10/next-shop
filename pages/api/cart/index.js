import { closeConnection, connectDatabase } from '../../../util/database-util';
import Product from '../../../database/Models/Product';
import useAuth from '../../../hooks/useAuth';
import { jsonParser } from '../../../helpers/helpers';
import CartItem from '../../../database/Models/CartItem';

async function handler(req, res) {

    if (req.method === "GET") {
        await connectDatabase(process.env.DB_NAME)
        let user = await useAuth(req)

        if (!user) {
            return res.status(403).send({ message: "not authorized!" })
        }

        let items = await CartItem.find({ user: user._id, deletedAt: null }).populate(['product', 'selectedAttributes.size.size'])
        // closeConnection()

        res.status(200).json({ message: "items loaded successfully!", items })
        return
    }


    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        let { productId, attributeId, sizeId } = req.body;


        let product = await Product.findById(productId).populate('attributes.sizes.sizeId').exec()
        console.log(productId, product);
        let selectedAttribute = jsonParser(product.attributes).find(attr => attr._id === attributeId)

        let { price_increase, sizeId: size } = selectedAttribute.sizes.find(size => size._id === sizeId)
        let selectedSize = { price_increase, size }

        let allPrices = +product.price + +selectedAttribute.price_increase + +selectedSize.price_increase;
        let discountAmount = (+allPrices * +product.discount_percentage / 100);
        let payPrice = +allPrices - +discountAmount;

        console.log(selectedSize);
        let newItemInputs = {
            user: user?._id ?? null,
            product,
            selectedAttributes: {
                color_name: selectedAttribute.color_name,
                price_increase: selectedAttribute.price_increase,
                palette: selectedAttribute.palette,
                image: selectedAttribute.image,
                size: selectedSize,
            },
            discountAmount,
            payPrice
        }

        let newItem = await CartItem.create(newItemInputs).then(t => t.populate(['product', 'selectedAttributes.size.size']))
        closeConnection()

        res.status(201).json({ message: "new cart item created successfully", item: newItem })
    }


}

export default handler;