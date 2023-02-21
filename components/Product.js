import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductModal from './Modals/ProductModal'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import ProductProvider from './Providers/ProductProvider'
import ShoppingCartIcon from './ui/icons/ShoppingCartIcon'
import PercentageIcon from './ui/icons/PercentageIcon'

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
                className="col-span-1 aspect-square rounded-3xl overflow-hidden bg-white cursor-pointer hover:scale-125 transition-all duration-300 relative hover:z-20">

                <div className='w-full'>
                    <Image className='w-full' src={product.image} alt={product.name} priority={true} width={400} height={400} />
                </div>

                <div className='absolute top-4 left-2 flex flex-col flex-wrap max-h-[30%] gap-2'>
                    {colors.map((color) => (
                        <div className='w-6 p-[2px] aspect-square rounded-full border-[2px] border-gray-600'>
                            <div key={color._id} style={{ backgroundColor: "#" + color.color_code }} className="w-full h-full rounded-full z-50"></div>
                        </div>
                    ))}
                </div>

                {product.discount_percentage > 0 && (<div className='absolute flex flex-nowrap items-center text-red-500 bg-red-100 top-4 right-2 text-xs px-2 py-1 rounded-lg'>
                    <span className='text-[14px]'>{product.discount_percentage} %</span>
                </div>)}

                <div className='absolute w-full bottom-0 h-24 z-10 text-center flex items-center rounded-3xl border-2 border-gray-200 bg-gray-100 text-gray-800 text-sm'>
                    <div className='w-4/5 px-5 flex flex-col gap-y-1'>
                        <h2 className=' text-left text-lg'>{product.name}</h2>
                        <span className='flex flex-nowrap gap-x-2'>
                            <span className={`text-left text-lg font-bold ${product.discount_percentage > 0 && 'line-through text-gray-500'}`}>{product.price} <span className='text-sm'>$</span></span>
                            {product.discount_percentage > 0 && <span className='text-lg font-bold'>{product.price - (product.price * (product.discount_percentage / 100))} <span className='text-sm'>$</span></span>}
                        </span>
                    </div>
                    <span className=' w-1/5 flex justify-center items-center'>
                        <button type='button' onClick={e => e.stopPropagation()} className='rounded-xl p-3 bg-orange-200 hover:bg-orange-300 transition-all duration-300'>
                            <ShoppingCartIcon />
                        </button>
                    </span>
                </div>

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