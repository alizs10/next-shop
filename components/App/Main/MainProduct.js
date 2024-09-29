import Image from "next/image";
import SolidStarIcon from '../../ui/icons/SolidStarIcon';
import ChevronRightIcon from '../../ui/icons/ChevronRightIcon';
import ChevronLeftIcon from '../../ui/icons/ChevronLeftIcon';
import useAppStore from "../../../stores/app-store";
import useProductStore from "../../../stores/product-store";
import { useEffect } from "react";

import { AnimatePresence, motion } from 'framer-motion';

function MainProduct() {

    const { products } = useProductStore()
    const { shownProduct, setShownProduct, shownProductImage, setShownProductImage, toggleMainAddToCartPopup } = useAppStore()


    useEffect(() => {

        if (products.length > 0) {
            setShownProduct(products[0])
        }

    }, [products])

    function handleShowNextProduct() {

        let currentProductIndex = products.findIndex(product => product._id === shownProduct._id)
        let isExists = products[currentProductIndex + 1] ? true : false
        setShownProduct(isExists ? products[currentProductIndex + 1] : products[0])
    }

    function handleShowPrevProduct() {

        let currentProductIndex = products.findIndex(product => product._id === shownProduct._id)
        let isExists = products[currentProductIndex - 1] ? true : false
        setShownProduct(isExists ? products[currentProductIndex - 1] : products[products.length - 1])
    }

    if (!shownProduct) return

    return (

        <div className="relative flex flex-col items-center col-span-7 lg:col-span-4 gap-y-4">

            <div className="relative flex flex-col w-full h-full">

                <div className="flex items-center justify-between">

                    <button onClick={handleShowPrevProduct} className="text-white md:pl-10">
                        <div className="w-14 h-14">
                            <ChevronLeftIcon />
                        </div>
                    </button>

                    <span className="w-1/3 md:w-1/2 lg:w-[40%] flex items-center justify-center aspect-square rounded-full outline outline-2 outline-orange-200">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                className="z-10"
                                key={shownProduct._id + shownProductImage}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: [-50, 0] }}
                                exit={{ opacity: 0, x: [0, 50] }}
                                transition={{ duration: "0.3" }}
                            >
                                <Image className="scale-[150%] rotate-[-20deg] w-full" src={shownProduct?.attributes[shownProductImage].image ?? ""} alt={shownProduct.name} width={600} height={400} />
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <button onClick={handleShowNextProduct} className="text-red-500 md:pr-10">
                        <div className="w-14 h-14">
                            <ChevronRightIcon />
                        </div>
                    </button>
                </div>
            </div>


            <div className="flex justify-center gap-4 mt-4">
                {shownProduct.attributes.map((attr, index) => (
                    <div onClick={() => setShownProductImage(index)} key={index} className={`${index === 1 ? 'w-12 h-12 rotate-12' : 'w-8 h-8'} cursor-pointer mx-auto rounded-full ${index === shownProductImage ? 'border-red-500' : 'border-white'} border-2 transition-all duration-300 flex flex-nowrap overflow-hidden`}>
                        <div style={{ backgroundColor: attr.palette[0] }} className="w-1/2 h-full border-r-2 border-white"></div>
                        <div style={{ backgroundColor: attr.palette[1] }} className="w-1/2 h-full"></div>
                    </div>
                ))}

            </div>



            <div className="flex flex-col items-center gap-y-2">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.h2
                        key={shownProduct._id}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: [-50, 0] }}
                        exit={{ opacity: 0, x: [0, 50] }}
                        transition={{ duration: "0.3" }}
                        className="text-2xl italic font-bold text-white">{shownProduct.name}</motion.h2>
                </AnimatePresence>
                <div className="flex items-center flex-nowrap gap-x-2">

                    <div className="flex flex-nowrap">
                        {Array(Math.floor(shownProduct.rating)).fill(true).map((_, i) => <span key={i} className="text-yellow-500">
                            <div className="w-6 h-6">
                                <SolidStarIcon />
                            </div>
                        </span>)}
                        {Array(5 - Math.floor(shownProduct.rating)).fill(true).map((_, i) => <span key={i} className="">
                            <div className="w-6 h-6">
                                <SolidStarIcon />
                            </div>
                        </span>)}
                    </div>

                    <span className="text-3xl text-gray-400 lg:text-xl">|</span>
                    <span className="text-xl font-bold lg:text-xl text-orange-200/90">${shownProduct.price}</span>
                </div>
                <button onClick={() => toggleMainAddToCartPopup(shownProduct)} className="px-5 py-2 text-lg font-bold text-red-500 border-2 border-red-500 rounded-xl lg:text-xs">BUY NOW</button>
            </div>




        </div>

    );
}

export default MainProduct;