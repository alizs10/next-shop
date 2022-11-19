import React, { useState } from 'react'

function Product({ colStart, discount }) {

    const [showDetails, setShowDetails] = useState(false)
    let product = {
        name: "Nike Air Force 1 '07"
    }

    return (
        <div
            onMouseOver={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
            className={`${colStart ? `col-start-${colStart}` : ''} col-span-1 rounded-full overflow-hidden
         bg-white cursor-pointer hover:scale-125 transition-all duration-300 shadow-md relative
         hover:z-20
         `}>
            <img className='rounded-full' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png' />


            <div className='absolute top-1 left-1/2 flex gap-1'>
                <span className='w-2 h-2 bg-blue-400 rounded-full'></span>
                <span className='w-2 h-2 mt-[2px] bg-green-500 rounded-full'></span>
                <span className='w-2 h-2 mt-[7px] bg-red-500 rounded-full'></span>
            </div>

            {discount && (
                <div className='absolute top-[5%] pt-5 -left-[20%] w-[75%] z-30 text-center py-1 -rotate-45
                bg-red-300 text-gray-800 text-xs font-bold'>{discount} %</div>
            )}

            <div className='absolute w-full bottom-0 z-10 text-center py-1
            bg-gray-200 text-gray-800 text-sm'>115 $</div>

            {showDetails && (
                <>
                    <div className='absolute top-0 left-0 w-full h-full rounded-full bg-white/40 flex justify-center items-center'>

                        <span className='p-2 text-[13px]'>
                            {product.name}
                        </span>
                    </div>
                    <button className='absolute text-center p-2 text-xs bottom-0 left-0 right-0 bg-green-200 z-20'>
                        BUY NOW!
                    </button>
                </>
            )}

        </div>
    )
}

export default Product