import { createContext, useEffect, useState } from "react";
import useAppStore from "../stores/app-store";
import userStore from "../stores/user-store";
import { addItemToCart, decreaseItemQuantity, getCartItems, increaseItemQuantity, removeItemFromCart } from "../helpers/cart-helpers";
import { generateRandomId } from "../helpers/helpers";


export const CartContext = createContext()

export function CartContextProvider({ children }) {

    const [payAmount, setPayAmount] = useState(0)

    const { cartProcess, setCartProcess, updateCart, cartUpdate, shownProduct } = useAppStore()
    const { user } = userStore()


    async function handleAddToCart(selectedColor, selectedSize) {

        // api call
        let newItem = {
            productId: shownProduct._id,
            attributeId: shownProduct.attributes[selectedColor]._id,
            sizeId: shownProduct.attributes[selectedColor].sizes[selectedSize]._id
        }
        setCartProcess({ status: true, process: null })

        if (user) {
            let result = await handlePostCartItem(newItem)
            let data = await result.json()
            addItemToCart(data.item)

        } else {

            let cartItem = generateNewCartItem(selectedColor, selectedSize)

            // save cart items in local storage
            addItemToCart(cartItem)

        }

        updateCart()
        setCartProcess({ status: false, process: null })
        // toggleMainAddToCartPopup()
    }

    async function handleIncreaseQuantity(item) {

        if (cartProcess.status) return

        setCartProcess({ status: true, process: "increase" })
        if (user) {

            let result = await handlePostIncreaseCartItemQuantity(item._id)

            if (!result) {
                setCartProcess({ status: false, process: null })
                console.log("couldn't increase cart item quantity, try again");
                return
            }

        }

        increaseItemQuantity(item._id)
        setCartProcess({ status: false, process: null })
        updateCart()
        console.log("cart item's quantity increased!");
    }

    async function handleDecreaseQuantity(item) {

        if (cartProcess.status) return

        setCartProcess({ status: true, process: "decrease" })

        if (user) {

            let result = await handlePostDecreaseCartItemQuantity(item._id)

            if (!result) {
                setCartProcess({ status: false, process: null })
                console.log('couldnt delete/decrease cart item, try again');
                return
            }

        }

        if (item.quantity > 1) {
            // decrease
            decreaseItemQuantity(item._id)
        } else {
            // delete
            removeItemFromCart(item._id)
        }

        setCartProcess({ status: false, process: null })
        updateCart()
        console.log('cart item deleted!');

    }

    function generateNewCartItem(selectedColor, selectedSize) {

        let colorAttr = { ...shownProduct.attributes[selectedColor] }
        let sizeAttr = shownProduct.attributes[selectedColor].sizes[selectedSize]
        colorAttr.size = sizeAttr

        let allPrices = +shownProduct.price + +colorAttr.price_increase + +sizeAttr.price_increase;
        let discountAmount = (+allPrices * +shownProduct.discount_percentage / 100);
        let payPrice = +allPrices - +discountAmount;

        colorAttr.attributeId = colorAttr._id;
        delete colorAttr._id

        let newItem = {
            _id: generateRandomId(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            quantity: 1,
            product: shownProduct,
            selectedAttributes: colorAttr,
            payPrice,
            discountAmount,
        }

        return newItem;
    }

    function isItemExistsInCart(item) {

        let cartItems = getCartItems();
        console.log(cartItems);
        let existedItem;

        let isExists = cartItems.some(cartItem => {

            if (cartItem.product._id === item.product._id && cartItem.selectedAttributes.attributeId === item.selectedAttributes.attributeId && cartItem.selectedAttributes.size.sizeId._id === item.selectedAttributes.size.sizeId._id) {
                existedItem = cartItem;
                return true;
            }
            return false
        });

        return isExists ? existedItem : false;
    }


    // api helpers

    async function handlePostCartItem(item) {
        let result = await fetch('/api/cart', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        })

        return result;
    }

    async function handlePostIncreaseCartItemQuantity(itemKey) {

        try {

            let result = await fetch('/api/cart/' + itemKey, {
                method: "POST",
                body: JSON.stringify({ mode: "increase" }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (result.status === 200) {
                return true
            } else {
                return false
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    async function handlePostDecreaseCartItemQuantity(itemKey) {

        try {

            let result = await fetch('/api/cart/' + itemKey, {
                method: "POST",
                body: JSON.stringify({ mode: "decrease" }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (result.status === 200) {
                return true
            } else {
                return false
            }

        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {

        let cartItems = getCartItems()
        if (cartItems.length === 0) {
            setPayAmount(0)
        } else {

            let prices = 0;
            cartItems.map(item => {
                prices += (item.payPrice * item.quantity)
            })

            setPayAmount(prices)
        }

    }, [cartUpdate])


    let values = { handleAddToCart, handleIncreaseQuantity, handleDecreaseQuantity, payAmount, isItemExistsInCart, generateNewCartItem }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}