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

        <div className="col-span-7 mt-8 xl:mt-24 lg:col-span-4 relative flex flex-col gap-y-4 items-center">


            <div className="relative flex flex-col w-full h-full">

                <div className="px-3 flex gap-x-2 justify-evenly items-center">

                    <span onClick={handleShowPrevProduct} className="cursor-pointer text-white scale-[220%]">
                        <ChevronLeftIcon />
                    </span>
                    <span className="w-1/2 lg:w-[40%] flex items-center justify-center aspect-square rounded-full bg-gray-600/50 shadow-md outline outline-2 outline-orange-200">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                className="z-10"
                                key={shownProduct._id + shownProductImage}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: [-50, 0] }}
                                exit={{ opacity: 0, x: [0, 50] }}
                                transition={{ duration: "0.3" }}
                            >
                                <Image className="scale-[150%] rotate-[-20deg] w-full" src={shownProduct?.attributes[shownProductImage].image ?? ""} alt={shownProduct.name} width={600} height={600} />
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <div onClick={handleShowNextProduct} className="cursor-pointer text-red-500 scale-[220%]">
                        <ChevronRightIcon />
                    </div>
                </div>
            </div>


            <div className="mt-4 flex gap-4 justify-center">
                {shownProduct.attributes.map((attr, index) => (
                    <div onClick={() => setShownProductImage(index)} key={index} className={`${index === 1 ? 'w-12 h-12 rotate-12' : 'w-8 h-8'} cursor-pointer mx-auto rounded-full ${index === shownProductImage ? 'border-red-500' : 'border-white'} border-2 transition-all duration-300 flex flex-nowrap overflow-hidden`}>
                        <div style={{ backgroundColor: attr.palette[0] }} className="w-1/2 h-full border-r-2 border-white"></div>
                        <div style={{ backgroundColor: attr.palette[1] }} className="w-1/2 h-full"></div>
                    </div>
                ))}

            </div>



            <div className="flex flex-col gap-y-1 items-center">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.h2
                        key={shownProduct._id}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: [-50, 0] }}
                        exit={{ opacity: 0, x: [0, 50] }}
                        transition={{ duration: "0.3" }}
                        className="font-bold text-white italic text-2xl lg:text-lg">{shownProduct.name}</motion.h2>
                </AnimatePresence>
                <div className="flex flex-nowrap gap-x-[1px] items-center">
                    <div className="flex flex-nowrap">

                        {shownProduct.stars.map((star, index) => {
                            return star.status ? (
                                <span key={index} className="text-yellow-500 lg:scale-75">
                                    <SolidStarIcon />
                                </span>
                            ) : (
                                <span key={index} className="text-white lg:scale-75">
                                    <SolidStarIcon />
                                </span>)
                        })}

                    </div>
                    <span className="text-gray-400 text-3xl lg:text-xl">|</span>
                    <span className="font-bold text-xl lg:text-lg text-orange-200/90">${shownProduct.price}</span>
                </div>
                <button onClick={() => toggleMainAddToCartPopup(shownProduct)} className="px-7 lg:px-3 py-1 border-4 rounded-xl border-red-500 font-bold text-lg lg:text-xs text-red-500">BUY NOW</button>
            </div>




        </div>

    );
}

export default MainProduct;