import useAuth from "../../../hooks/useAuth";
import CartItem from "../../../database/Models/CartItem";
import Product from "../../../database/Models/Product";
import { connectDatabase } from "../../../util/database-util";
import { jsonParser } from "../../../helpers/helpers";

async function handler(req, res) {

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            return res.status(403).json({ message: "not authorized!" })
        }

        let { items } = req.body;
        let userCartItems = await CartItem.find({ user: user._id }).populate('selectedAttributes.size.sizeId')
        userCartItems = jsonParser(userCartItems)

        let shouldBeUpdated = [];
        let shouldBeCreated = [];

        items.map(item => {
            let isInCart = isItemInCart(item, userCartItems)
            if (isInCart) {
                // increase quantity
                let increasableItem = userCartItems.find(ci => ci._id === isInCart._id)
                shouldBeUpdated.push({
                    updateOne: {
                        filter: { _id: increasableItem._id },
                        update: { quantity: increasableItem.quantity + 1 }
                    }
                })
            } else {
                // add item
                shouldBeCreated.push({ productId: item.product._id, quantity: item.quantity, selectedAttributes: item.selectedAttributes })
            }
        })

        // update cart items
        if (shouldBeUpdated.length > 0) {
            await CartItem.bulkWrite(shouldBeUpdated)
        }

        // create new cart items

        if (shouldBeCreated.length > 0) {

            let newProductsInCart = await Product.find({ _id: { $in: shouldBeCreated.map(obj => obj.productId) } }).populate('attributes.sizes.sizeId').exec()
            newProductsInCart = jsonParser(newProductsInCart);


            let newItemsInput = shouldBeCreated.map(newObj => {

                let product = newProductsInCart.find(p => p._id === newObj.productId)
                let selectedAttribute = jsonParser(product.attributes).find(attr => attr._id === newObj.selectedAttributes.attributeId)

                let { price_increase, sizeId: size } = jsonParser(selectedAttribute.sizes).find(size => size._id === newObj.selectedAttributes.size._id)
                let selectedSize = { price_increase, sizeId: size }

                let allPrices = +product.price + +selectedAttribute.price_increase + +selectedSize.price_increase;
                let discountAmount = (+allPrices * +product.discount_percentage / 100);
                let payPrice = +allPrices - +discountAmount;

                return {
                    user: user._id,
                    product: product._id,
                    selectedAttributes: {
                        attributeId: selectedAttribute._id,
                        color_name: selectedAttribute.color_name,
                        price_increase: selectedAttribute.price_increase,
                        palette: selectedAttribute.palette,
                        image: selectedAttribute.image,
                        size: selectedSize,
                    },
                    quantity: newObj.quantity,
                    discountAmount,
                    payPrice
                }
            })

            await CartItem.insertMany(newItemsInput)

        }

        res.status(200).json({ message: "cart items are synced now" })
    }

}

function isItemInCart(item, items) {

    let itemInCart;

    items.some(i => {
        if (i.product === item.product._id && i.selectedAttributes.attributeId === item.selectedAttributes.attributeId && i.selectedAttributes.size.sizeId._id === item.selectedAttributes.size.sizeId._id) {
            itemInCart = i;
            return true;
        }

        return false;
    })

    return itemInCart ? itemInCart : false;
}


export default handler;