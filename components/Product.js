import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductModal from './Modals/ProductModal'
import Products from './Products'

function Product({ colStart, discount, product }) {

    const { onOpen, isOpen, onClose } = useDisclosure()
    const [showDetails, setShowDetails] = useState(false)

    let colors = []
    for (const key in product.colors) {
        colors.push({ id: key, ...product.colors[key] })
    }
    return (
        <div
            onClick={() => {
                onOpen()
            }}
            onMouseOver={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            className={`${colStart ? `col-start-${colStart}` : ''} col-span-1 rounded-full overflow-hidden
         bg-white cursor-pointer hover:scale-125 transition-all duration-300 shadow-md relative
         hover:z-20
         `}>
            <img className='rounded-full' src={product.image} />


            <div className='absolute top-1 left-1/2 flex gap-1'>
                {colors.map((color, index) => (
                    <span style={{ backgroundColor: color.color_code, marginTop: `${index * 2}px` }} className="shadow-md w-2 h-2 rounded-full"></span>
                ))}

            </div>

            {product.discount_percentage > 0 && (
                <div className='absolute top-[5%] pt-5 -left-[20%] w-[75%] z-30 text-center py-1 -rotate-45
                bg-red-300 text-gray-800 text-xs font-bold'>{product.discount_percentage} %</div>
            )}

            <div className='absolute w-full bottom-0 z-10 text-center py-1
            bg-gray-200 text-gray-800 text-sm'>{product.price} $</div>

            {showDetails && (
                <>
                    <div className='absolute top-0 left-0 w-full h-full rounded-full bg-white/40 flex justify-center items-center'>

                        <span className='p-2 text-[13px]'>
                            {product.name}
                        </span>
                    </div>
                    <button onClick={e => {
                        e.stopPropagation()
                    }} className='absolute text-center p-2 text-xs bottom-0 left-0 right-0 bg-green-200 z-20'>
                        BUY NOW!
                    </button>
                </>
            )}
            {isOpen && (<ProductModal isOpen={isOpen} onClose={onClose} product={product} />)}
        </div>
    )
}

export default Product