import XIcon from "../../ui/icons/XIcon";
import { AnimatePresence } from "framer-motion";
import useAppStore from "../../../stores/app-store";
import CartItem from './CartItem'

import { motion } from 'framer-motion';
import userStore from "../../../stores/user-store";
import { useEffect, useState } from "react";
import Link from "next/link";

function CartPopup() {

    const { cartPopupVis, toggleCartPopup, cartItems, setCartItems, payAmount } = useAppStore()
    const { user } = userStore()

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

        if (cartPopupVis && user) {
            handleGetCartItems()
        }

    }, [cartPopupVis])

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

                                    {cartItems.map(item => <CartItem key={item._id} item={item} />)}

                                </ul>
                                <div className="flex flex-col gap-y-2">
                                    <span className="font-bold text-lg text-white">Pay Amount: {payAmount} $</span>
                                    <Link className="w-full block" href="/cart">
                                        <button className="w-full rounded-xl bg-white text-red-500 font-bold py-2">
                                            Check Out
                                        </button>
                                    </Link>
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