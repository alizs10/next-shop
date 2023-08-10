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
        let userCartItems = await CartItem.find()

        let shouldBeUpdated = [];
        let shouldBeCreated = [];

        items.map(item => {
            let isInCart = isItemInCart(item, userCartItems)
            if (isInCart) {
                // increase quantity
                let increasableItem = userCartItems.find(ci => ci._id === item._id)
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
                let selectedAttribute = jsonParser(product.attributes).find(attr => attr._id === newObj.selectedAttributes._id)

                console.log(jsonParser(selectedAttribute.sizes), newObj);
                let { price_increase, sizeId: size } = jsonParser(selectedAttribute.sizes).find(size => size._id === newObj.selectedAttributes.size._id)
                let selectedSize = { price_increase, sizeId: size }

                let allPrices = +product.price + +selectedAttribute.price_increase + +selectedSize.price_increase;
                let discountAmount = (+allPrices * +product.discount_percentage / 100);
                let payPrice = +allPrices - +discountAmount;

                return {
                    user: user._id,
                    product: product._id,
                    selectedAttributes: {
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

    // [{
    //     "_id": 64446,
    //     "createdAt": 1691582654193,
    //     "updatedAt": 1691582654193,
    //     "quantity": 1,
    //     "product": {
    //         "_id": "64d2248f64011c7d2bc20994",
    //         "name": "Nike Air Force 1 '07",
    //         "image": "/assets/products/1/1.png",
    //         "gallery": ["/products/p1/g1.webp", "/products/p1/g2.webp"], "status": false, "description": "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.", "discount_percentage": 5, "frozen_number": 0, "marketable_number": 10, "sold_number": 0, "price": 110, "attributes": [{ "color_name": "white", "image": "/assets/products/1/1.png", "palette": ["#fff", "#fff"], "price_increase": 0, "sizes": [{ "sizeId": { "_id": "64d221d264011c7d2bc20980", "size": 5, "__v": 0 }, "price_increase": 0, "_id": "64d2248f64011c7d2bc20996" }, { "sizeId": { "_id": "64d221e964011c7d2bc20985", "size": 7, "__v": 0 }, "price_increase": 0, "_id": "64d2248f64011c7d2bc20997" }], "_id": "64d2248f64011c7d2bc20995" }, { "color_name": "black", "image": "/assets/products/1/2.png", "palette": ["#000", "#000"], "price_increase": 0, "sizes": [{ "sizeId": { "_id": "64d221d264011c7d2bc20980", "size": 5, "__v": 0 }, "price_increase": 0, "_id": "64d2248f64011c7d2bc20999" }, { "sizeId": { "_id": "64d221e964011c7d2bc20985", "size": 7, "__v": 0 }, "price_increase": 0, "_id": "64d2248f64011c7d2bc2099a" }], "_id": "64d2248f64011c7d2bc20998" }], "deletedAt": null, "createdAt": "2023-08-08T11:18:39.683Z", "updatedAt": "2023-08-08T11:18:39.683Z", "__v": 0, "stars": [{ "status": true }, { "status": true }, { "status": true }, { "status": true }, { "status": true }]
    //     },
    //     "selectedAttributes": {
    //         "color_name": "white",
    //         "image": "/assets/products/1/1.png",
    //         "palette": ["#fff",
    //             "#fff"],
    //         "price_increase": 0,
    //         "sizes": [{
    //             "sizeId": {
    //                 "_id": "64d221d264011c7d2bc20980",
    //                 "size": 5,
    //                 "__v": 0
    //             },
    //             "price_increase": 0,
    //             "_id": "64d2248f64011c7d2bc20996"
    //         }, {
    //             "sizeId": {
    //                 "_id": "64d221e964011c7d2bc20985",
    //                 "size": 7,
    //                 "__v": 0
    //             },
    //             "price_increase": 0,
    //             "_id": "64d2248f64011c7d2bc20997"
    //         }],
    //         "_id": "64d2248f64011c7d2bc20995",
    //         "size": {
    //             "sizeId": {
    //                 "_id": "64d221d264011c7d2bc20980",
    //                 "size": 5,
    //                 "__v": 0
    //             },
    //             "price_increase": 0,
    //             "_id": "64d2248f64011c7d2bc20996"
    //         }
    //     },

    //     "payPrice": 104.5,
    //     "discountAmount": 5.5
    // }]

    // three conditions => 1.same product 2.same color(attr) 3.same size of same color(attr)

    return items.some(i => {
        if (i.product._id === item.product._id && i.selectedAttributes._id === item.selectedAttributes._id && i.selectedAttributes.size.sizeId._id === item.selectedAttributes.size.sizeId._id) {
            return true;
        }

        return false;
    })

}

export default handler;