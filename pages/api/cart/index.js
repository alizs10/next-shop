import { closeConnection, connectDatabase } from '../../../util/database-util';
import Product from '../../../database/Models/Product';
import useAuth from '../../../hooks/useAuth';
import { jsonParser } from '../../../helpers/helpers';
import CartItem from '../../../database/Models/CartItem';

async function handler(req, res) {

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        let { productId, attributeId, sizeId } = req.body;


        let product = await Product.findById(productId).populate('attributes.sizes.sizeId').exec()
        let selectedAttribute = jsonParser(product.attributes).find(attr => attr._id === attributeId)
        console.log(product.attributes);
        let selectedSize = selectedAttribute.sizes.find(size => size._id === sizeId)
        let allPrices = +product.price + +selectedAttribute.price_increase + +selectedSize.price_increase;
        let discountAmount = (+allPrices * +product.discount_percentage / 100);
        let payPrice = +allPrices - +discountAmount;

        let newItemInputs = {
            userId: user?._id ?? null,
            productId,
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

        let newItem = await CartItem.create(newItemInputs).then(t => t.populate(['productId', 'selectedAttributes.size.sizeId']))
        closeConnection()

        res.status(201).json({ message: "new cart item created successfully", item: newItem })
    }


}

export default handler;