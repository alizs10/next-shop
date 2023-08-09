import { AnimatePresence } from "framer-motion";
import useAppStore from "../../../stores/app-store";
import XIcon from "../../ui/icons/XIcon";
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import BackdropWrapper from '../../Common/BackdropWrapper';
import { MoonLoader } from "react-spinners";
import PlusIcon from "../../ui/icons/PlusIcon";
import MinusIcon from "../../ui/icons/MinusIcon";
import TrashIcon from "../../ui/icons/TrashIcon";
import { CartContext } from "../../../context/CartContext";

function AddToCartPopup() {

    const { handleDecreaseQuantity, handleIncreaseQuantity, generateNewCartItem, isItemExistsInCart, handleAddToCart } = useContext(CartContext)

    const { cartUpdate, toggleMainAddToCartPopup, mainAddToCartPopupVis, shownProduct, cartProcess } = useAppStore()

    const [sizes, setSizes] = useState([])

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedColor, setSelectedColor] = useState(0)
    const [payPrice, setPayPrice] = useState(0)
    const [existedItem, setExistedItem] = useState(null)
    const [itemExistence, setItemExistence] = useState(false)

    function calcPayPrice() {
        let colorAttr = shownProduct.attributes[selectedColor]
        let sizeAttr = shownProduct.attributes[selectedColor].sizes[selectedSize]

        let allPrices = +shownProduct.price + +colorAttr.price_increase + +sizeAttr.price_increase;
        let discountAmount = (+allPrices * +shownProduct.discount_percentage / 100);
        let payPrice = +allPrices - +discountAmount;
        setPayPrice(payPrice)
    }


    function checkItemExistence(item) {
        let isExists = isItemExistsInCart(item)
        setItemExistence(isExists ? true : false)
        setExistedItem(isExists ? isExists : null)
    }

    useEffect(() => {

        checkItemExistence(generateNewCartItem(selectedColor, selectedSize))
        if (mainAddToCartPopupVis) {
            calcPayPrice()
        }


    }, [cartUpdate, selectedColor, selectedSize])

    useEffect(() => {

        if (shownProduct) {
            setSizes(shownProduct.attributes[selectedColor].sizes)
            setSelectedSize(0)
        }

    }, [selectedColor, shownProduct])


    if (!shownProduct) return

    return (
        <BackdropWrapper handleClick={toggleMainAddToCartPopup}>
            <AnimatePresence>
                {mainAddToCartPopupVis && (
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [0.9, 1], opacity: [0, 1] }}
                        exit={{ scale: [1, 0.9], opacity: [1, 0] }}
                        transition={{ bounce: "spring", duration: ".3" }}
                        onClick={e => e.stopPropagation()}
                        className="self-center mx-auto  w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-5 rounded-xl bg-gray-700 text-white shadow-md shadow-black">
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
                                <div className="flex flex-col gap-y-1">
                                    <span className="flex justify-between text-white font-bold text-lg">
                                        <span>Product Price:</span>
                                        <span>${payPrice}</span>
                                    </span>
                                    {existedItem && existedItem.quantity > 1 && (
                                        <span className="flex justify-between text-red-500 font-bold text-lg">
                                            <span>Total Pay Price:</span>
                                            <span>${payPrice * existedItem.quantity}</span>
                                        </span>
                                    )}
                                </div>

                                {!itemExistence ? (
                                    <button onClick={() => handleAddToCart(selectedColor, selectedSize)} className="py-2 text-lg font-bold text-white rounded-xl bg-red-500">
                                        Add To Cart
                                    </button>
                                ) : (
                                    <div className="flex justify-between items-center border-2 rounded-tl-xl rounded-br-xl border-gray-600">
                                        <button onClick={() => handleIncreaseQuantity(existedItem)} disabled={cartProcess.isProcessing} className="w-1/4 h-16 flex justify-center items-center cursor-pointer text-gray-200 hover:bg-emerald-100 hover:text-emerald-500 rounded-tl-xl hover:border-red-100 transition-all duration-300">
                                            {cartProcess.status && cartProcess.process === 'increase' ? <MoonLoader color='#fff' size={10} /> : <PlusIcon />}
                                        </button>
                                        <div className="text-xl text-gray-200">{existedItem.quantity}</div>
                                        <button onClick={() => handleDecreaseQuantity(existedItem)} disabled={cartProcess.isProcessing} className="w-1/4 h-16 flex justify-center items-center cursor-pointer text-gray-200 hover:bg-red-100 hover:text-red-500 rounded-br-xl hover:border-red-100 transition-all duration-300">
                                            {existedItem.quantity > 1 ? (
                                                cartProcess.status && cartProcess.process === 'decrease' ? <MoonLoader color='#fff' size={10} /> : <MinusIcon />
                                            ) : (
                                                cartProcess.status && cartProcess.process === 'decrease' ? <MoonLoader color='#fff' size={10} /> : <TrashIcon />
                                            )}
                                        </button>
                                    </div>

                                )}

                            </div>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </BackdropWrapper>
    );
}

export default AddToCartPopup;