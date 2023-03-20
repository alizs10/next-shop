import { AnimatePresence } from "framer-motion";
import useAppStore from "../../../stores/app-store";
import XIcon from "../../ui/icons/XIcon";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

function AddToCartPopup() {

    const { toggleMainAddToCartPopup, mainAddToCartPopupVis, shownProduct } = useAppStore()


    const [sizes, setSizes] = useState([])
    const [selectedColor, setSelectedColor] = useState(0)

    const [selectedSize, setSelectedSize] = useState(0)


    useEffect(() => {

        if (shownProduct) {
            setSizes(shownProduct.attributes[selectedColor].sizes)
            setSelectedSize(0)
        }

    }, [selectedColor, shownProduct])

    const { addCartItem } = useAppStore()

    async function handleAddToCart() {
        // api call
        let newItem = {
            productId: shownProduct._id,
            attributeId: shownProduct.attributes[selectedColor]._id,
            sizeId: shownProduct.attributes[selectedColor].sizes[selectedSize]._id
        }

        let result = await fetch('/api/cart', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (result.status === 201) {
            let data = await result.json()
            addCartItem(data.item)

            console.log('new cart item added successfully');
        }
    }

    if (!shownProduct) return
    return (
        <AnimatePresence>
            {mainAddToCartPopupVis && (
                <motion.div
                    initial={{ scale: 1, x: "-50%", y: "-50%" }}
                    animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                    exit={{ scale: [1, 0.9], opacity: [1, 0] }}
                    transition={{ bounce: "spring", duration: ".3" }}
                    className="fixed top-1/2 left-1/2 w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-5 rounded-xl z-[9999] bg-gray-700 text-white shadow-md shadow-black">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">Add To Cart</span>
                        <span onClick={toggleMainAddToCartPopup} className='hover:bg-gray-600 transition-all duration-300 p-1 rounded-md cursor-pointer text-red-500 scale-125'>
                            <XIcon />
                        </span>
                    </div>

                    <div className="mt-4 flex flex-col gap-y-4">

                        <div className="flex flex-col gap-y-2">
                            <label className="text-lg">Select Color:</label>

                            <div className="grid grid-cols-6 gap-4">
                                {shownProduct.attributes.map((attr, index) => (
                                    <div key={index} onClick={() => setSelectedColor(index)} className={`col-span-1 aspect-square cursor-pointer transition-all duration-300 rounded-full shadow-md border-[3px] ${index === selectedColor ? 'border-red-500' : 'border-gray-500'} flex flex-nowrap overflow-hidden`}>
                                        <div style={{ backgroundColor: attr.palette[0] }} className="w-1/2 h-full border-r-2 border-white"></div>
                                        <div style={{ backgroundColor: attr.palette[1] }} className="w-1/2 h-full"></div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="flex flex-col gap-y-2">
                            <label className="text-lg">Select Size:</label>
                            <div className="grid grid-cols-4 gap-4">
                                {sizes.map((size, index) => (
                                    <span key={size._id} onClick={() => setSelectedSize(index)} className={`col-span-1 px-3 py-2 text-md text-gray-800 bg-white rounded-xl text-center border-[3px] ${index === selectedSize ? 'border-red-500' : 'border-white hover:border-gray-200 hover:bg-gray-200'} transition-all duration-300 cursor-pointer`}>{size.sizeId.size}</span>
                                ))}
                            </div>
                        </div>


                        <div className="mt-4 flex flex-col gap-y-2">
                            <span className="flex justify-between text-white font-bold text-lg">
                                <span>Pay Price:</span>
                                <span>$149</span>
                            </span>

                            <button onClick={handleAddToCart} className="py-2 text-lg font-bold text-white rounded-xl bg-red-500">
                                Add To Cart
                            </button>

                        </div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>

    );
}

export default AddToCartPopup;