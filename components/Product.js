import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductModal from './Modals/ProductModal'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import ProductProvider from './Providers/ProductProvider'
import BagIcon from './ui/icons/BagIcon'
import ShoppingCartIcon from './ui/icons/ShoppingCartIcon'

function Product({ colStart, product }) {

    const { onOpen, isOpen, onClose } = useDisclosure()
    const [showDetails, setShowDetails] = useState(false)

    let colors = []
    for (const key in product.colors) {
        colors.push({ id: key, ...product.colors[key] })
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ bounce: 0 }}
                onClick={() => {
                    onOpen()
                }}
                onMouseOver={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}
                className={`${colStart ? `col-start-${colStart}` : ''} col-span-1 rounded-3xl overflow-hidden
            bg-white cursor-pointer hover:scale-125 transition-all duration-300 relative
            hover:z-20
            `}>

                <div className=''>
                    <Image src={product.image} alt={product.name} priority={true} width={400} height={400} />
                </div>

                <div className='absolute top-4 left-2 flex flex-col gap-2'>
                    {colors.map((color) => (
                        <div className='w-6 p-[2px] aspect-square rounded-full border-[2px] border-gray-600'>
                            <div key={color._id} style={{ backgroundColor: "#" + color.color_code }} className="w-full h-full rounded-full z-50"></div>
                        </div>
                    ))}

                </div>

                {product.discount_percentage > 0 && <span className='absolute aspect-square flex justify-center items-center top-4 right-2 text-xs p-1 bg-red-200 rounded-full text-gray-800'>{product.discount_percentage}%</span>}

                <div className='absolute w-full bottom-0 h-20 z-10 text-center flex items-center rounded-3xl border-2 border-gray-200 bg-gray-100 text-gray-800 text-sm'>
                    <div className='w-80 px-5 flex flex-col gap-y-1'>
                        <h2 className=' text-left text-lg'>{product.name}</h2>
                        <span className='flex flex-nowrap gap-x-2'>
                            <span className={`text-left text-md ${product.discount_percentage > 0 && 'line-through'}`}>{product.price} $</span>
                            {product.discount_percentage > 0 && <span>{product.price - (product.price * (product.discount_percentage / 100))} $</span>}
                        </span>
                    </div>
                    <span className='w-20 flex justify-center items-center'>
                        <span className='rounded-xl p-3 bg-orange-200 hover:bg-orange-300 transition-all duration-300'>
                            <ShoppingCartIcon />
                        </span>
                    </span>
                </div>

                {/* {showDetails && (
                    <>
                        <div className='absolute top-0 left-0 w-full h-full  bg-white/40 flex justify-center items-center'>

                            <span className='text-center p-2 text-[13px]'>
                                {product.name}
                            </span>
                        </div>
                        <button onClick={e => {
                            e.stopPropagation()
                        }} className='absolute w-full text-center p-2 text-xs bottom-0 left-0 right-0 bg-green-200 z-20'>
                            BUY NOW!
                        </button>
                    </>
                )} */}
                {isOpen && (
                    <ProductProvider>
                        <ProductModal isOpen={isOpen} onClose={onClose} product={product} />
                    </ProductProvider>
                )}
            </motion.div>
        </AnimatePresence>
    )
}

export default Product