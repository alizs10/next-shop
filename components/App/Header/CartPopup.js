import XIcon from "../../ui/icons/XIcon";
import { AnimatePresence } from "framer-motion";
import useAppStore from "../../../stores/app-store";
import CartItem from './CartItem'

import { motion } from 'framer-motion';
import userStore from "../../../stores/user-store";
import { useEffect, useState } from "react";

function CartPopup() {

    const { cartPopupVis, toggleCartPopup, cartItems, setCartItems, removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = useAppStore()
    const { user } = userStore()

    const [payAmount, setPayAmount] = useState(0)
    const [loading, setLoading] = useState(false)

    async function handleGetCartItems() {
        setLoading(true)
        try {
            let result = await fetch('/api/cart')
            let data = await result.json()

            setCartItems(data.items)
            setLoading(false)

        } catch (error) {
            console.log(error.message);
            setLoading(false)
        }
    }

    useEffect(() => {

        console.log('here now');
        if (cartPopupVis && user) {
            console.log("here");
            handleGetCartItems()
        }

    }, [cartPopupVis])

    useEffect(() => {

        if (cartItems.length === 0) {
            setPayAmount(0)
        } else {

            let prices = 0;
            cartItems.map(item => {
                prices += item.payPrice
            })

            setPayAmount(prices)
        }

    }, [cartItems])


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



    return (
        <AnimatePresence>
            {cartPopupVis && (

                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                    exit={{ scale: [1, 0.9], opacity: [1, 0] }}
                    transition={{ bounce: "spring", duration: "0.3" }}
                    className="absolute top-0 right-0 flex flex-col gap-y-4 z-[9999] shadow-lg w-[350px] p-5 bg-red-600 rounded-3xl">
                    <div className='flex justify-between items-center'>
                        <div className="flex gap-x-2 items-end">
                            <span className='text-white text-xl font-semibold'>
                                Cart
                            </span>
                            <span className="text-sm w-6 aspect-square bg-white flex justify-center items-center text-red-500 font-bold rounded-md">{cartItems.length}</span>
                        </div>
                        <span onClick={toggleCartPopup} className='hover:bg-red-700 transition-all duration-300 p-1 rounded-md cursor-pointer text-gray-300 scale-125'>
                            <XIcon />
                        </span>
                    </div>

                    {loading ? (
                        <div className="text-white text-md">loading items...</div>
                    ) : (
                        cartItems.length > 0 ? (
                            <>
                                <ul className="flex flex-col gap-y-2 max-h-[50vh] overflow-y-scroll no-scrollbar">

                                    {cartItems.map(item => <CartItem key={item._id} item={item} handleIncreaseQuantity={handleIncreaseQuantity} handleDecreaseQuantity={handleDecreaseQuantity} />)}

                                </ul>
                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold text-lg text-white">Pay Amount: {payAmount} $</span>
                                    <button className="rounded-xl bg-white text-red-500 font-bold w-full py-2">
                                        Check Out
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-lg text-white w-full">
                                <span>No items...</span>
                            </div>
                        )
                    )}



                </motion.div>
            )}

        </AnimatePresence>
    );
}

export default CartPopup;