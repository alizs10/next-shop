import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../../context/ProductContext'
import BagIcon from '../ui/icons/BagIcon'
import HeartIcon from '../ui/icons/HeartIcon'
import SelectedItem from '../ui/SelectedItem'

function Product(props) {

    const { finalPrice, selectedColor, selectedSize, handleUpdatePrice, handleSelectColor, handleSelectSize, handleInitialPrice } = useContext(ProductContext)

    useEffect(() => {
        if(!props.product) return
        handleInitialPrice(props.product)
    }, [])

    useEffect(() => {
        if(!props.product) return
        handleUpdatePrice(props.product)
    }, [selectedColor, selectedSize])

    const [displayedImg, setDesplayedImg] = useState(props.product.image)

    const handleDisplayImage = (src) => {
        setDesplayedImg(src)
    }


    return (
        <div className='mx-20 mt-20 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='flex flex-col gap-2 col-span-1'>

                <div className='w-full object-center overflow-hidden hover:scale-105 transition-all duration-300 aspect-square rounded-3xl shadow-lg'>
                    <Image src={displayedImg} alt={props.product.name} width="600" height="600" />
                </div>

                <div className='mt-8 grid grid-cols-5 gap-x-2 gap-y-4'>
                    <div
                        onClick={handleDisplayImage.bind(null, props.product.image)}
                        key={props.product._id + "-image"} className='relative col-span-1 aspect-square object-center rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                        <Image src={props.product.image} width="200" height="200" />
                        {displayedImg === props.product.image && (
                            <SelectedItem />
                        )}
                    </div>
                    {props.product.gallery.map((image, index) => (
                        <div key={index}
                            onClick={handleDisplayImage.bind(null, image.src)}
                            className='col-span-1 relative aspect-square object-center rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                            <Image src={image.src} width="200" height="200" />
                            {displayedImg === image.src && (
                                <SelectedItem />
                            )}
                        </div>
                    ))}

                </div>
            </div>

            <div className="col-span-1 p-3 flex flex-col gap-y-8">
                <h2 className='font-bold text-3xl'>{props.product.name}</h2>

                {props.product.colors.length > 0 && (
                    <div className='flex flex-col gap-y-2'>
                        <span className="text-sm">Color:</span>
                        <div className="flex flex-wrap gap-2">
                            {props.product.colors.map((color, index) => (
                                <span
                                    onClick={handleSelectColor.bind(null, index)}
                                    key={index} className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                    <div
                                        style={{ backgroundColor: color.code }}
                                        className='relative overflow-hidden flex justify-center items-center rounded-full w-full h-full'>
                                        {index == selectedColor && (
                                            <SelectedItem />
                                        )}
                                    </div>
                                </span>
                            ))}

                        </div>

                    </div>
                )}

                {props.product.sizes.length > 0 && (
                    <div className='flex flex-col gap-y-2'>
                        <span className="text-sm">Size:</span>
                        <div className='flex flex-wrap gap-2'>
                            {props.product.sizes.map((size, index) => (
                                <span
                                    onClick={handleSelectSize.bind(null, index)}
                                    key={index} className={`rounded-xl px-5 py-2 bg-gray-100 border-[3px] cursor-pointer ${index == selectedSize ? "border-gray-400" : "border-white hover:border-gray-400"} transition-all duration-300`}>
                                    {size.size}
                                </span>
                            ))}

                        </div>
                    </div>
                )}
                <div className='flex w-full justify-between gap-y-2 text-md'>
                    <span>Price:</span>
                    <div className='flex flex-col'>
                        <span className="text-base self-end line-through">{props.product.price} $</span>
                        <span className="text-4xl">{finalPrice} $</span>
                    </div>
                </div>


            </div>

            <div className='col-span-1 p-3 flex flex-col gap-4'>
                <h3 className='font-bold text-sm'>About Prodcut</h3>
                <p className='leading-7 text-md text-justify'>
                    {props.product.description}
                </p>
                <div className='mt-auto flex flex-col gap-y-4'>
                    <button className='w-full rounded-3xl py-5 bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-md text-gray-800 flex justify-center gap-x-4 items-center'>
                        <span><HeartIcon /></span>
                        <span className='text-lg'>ADD TO FAVORITE</span>
                    </button>
                    <button className='w-full rounded-3xl py-5 bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-md text-gray-800 flex justify-center gap-x-4 items-center'>
                        <span><BagIcon /></span>
                        <span className='text-lg'>ADD TO BAG</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Product