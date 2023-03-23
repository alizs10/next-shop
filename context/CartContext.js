import { createContext, useEffect, useState } from "react";
import useAppStore from "../stores/app-store";
import userStore from "../stores/user-store";


export const CartContext = createContext()

export function CartContextProvider({ children }) {

    const { removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, cartItems } = useAppStore()
    const { user } = userStore()

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

    async function handleIncreaseQuantity(item) {

        if (user) {

            let result = await handlePostIncreaseCartItemQuantity(item._id)

            if (!result) {
                console.log('couldnt increase cart item quantity, try again');
                return
            }

        }

        increaseCartItemQuantity(item._id)
        console.log("cart item's quantity increased!");
    }

    async function handleDecreaseQuantity(item) {


        if (user) {

            let result = await handlePostDecreaseCartItemQuantity(item._id)

            if (!result) {
                console.log('couldnt delete/decrease cart item, try again');
                return
            }

        }

        if (item.quantity > 1) {
            // decrease
            decreaseCartItemQuantity(item._id)
        } else {
            // delete
            removeCartItem(item._id)
        }

        console.log('cart item deleted!');

    }

    const [payAmount, setPayAmount] = useState(0)

    useEffect(() => {

        if (cartItems.length === 0) {
            setPayAmount(0)
        } else {

            let prices = 0;
            cartItems.map(item => {
                prices += (item.payPrice * item.quantity)
            })

            setPayAmount(prices)
        }

    }, [cartItems])




    let values = { handleIncreaseQuantity, handleDecreaseQuantity, payAmount }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}