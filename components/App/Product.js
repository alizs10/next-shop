import { useContext, useEffect, useState } from 'react';
import HeartIcon from '../ui/icons/HeartIcon';
import SolidHeartIcon from '../ui/icons/SolidHeartIcon';
import SolidStarIcon from '../ui/icons/SolidStarIcon';
import Image from "next/image";
import useAppStore from '../../stores/app-store';
import useProductStore from '../../stores/product-store';
import { CartContext } from '../../context/CartContext';

function Product({ product }) {

    const { toggleMainAddToCartPopup, cartUpdate } = useAppStore()
    const { toggleProductToFavorite } = useProductStore()
    const { isProductExistsInCart } = useContext(CartContext)


    const [productExistence, setProductExistence] = useState(isProductExistsInCart(product))

    useEffect(() => {

        setProductExistence(isProductExistsInCart(product))

    }, [cartUpdate])

    return (
        <div onClick={() => toggleMainAddToCartPopup(product)} className={`h-fit cursor-pointer flex min-w-[400px] z-20 bg-white rounded-3xl transition-all duration-300`}>
            <div style={{ backgroundColor: product.attributes[0].palette[0] }} className="relative w-[35%] rounded-l-3xl aspect-square">
                <Image className="absolute bottom-6 scale-125 -left-10 rotate-[-30deg]" src={product.image} alt={product.name} width={200} height={200} />
            </div>
            <div className={`w-[65%] flex flex-col gap-y-0 pt-2 overflow-hidden rounded-r-3xl`}>
                <h6 className="font-semibold font-sans pl-2 text-gray-800 text-md">{product.name}</h6>
                <div className="flex flex-nowrap pl-2">

                    {product.stars.map((star, index) => {
                        return star.status ? (
                            <span key={index} className="text-yellow-500 lg:scale-90">
                                <SolidStarIcon />
                            </span>
                        ) : (
                            <span key={index} className="text-gray-200 lg:scale-90">
                                <SolidStarIcon />
                            </span>)
                    })}

                </div>
                <div className="flex justify-between items-center pl-2">
                    <span className="font-semibold font-sans text-gray-800 text-md">${product.price}</span>
                    <span onClick={() => toggleProductToFavorite(product._id)} className="cursor-pointer pr-2 text-gray-500 transition-all duration-300 hover:scale-125">
                        {product.isFavorite ? (<span className='text-red-500'><SolidHeartIcon /></span>) : (<HeartIcon />)}
                    </span>
                </div>
                <span className="font-semibold font-sans pl-2 text-gray-400 text-xs">men's snikers</span>
                <button className="w-full py-2 mt-2 font-sans hover:bg-red-50 font-semibold text-center transition-all duration-300 text-red-500 text-md">
                    {productExistence ? 'Added' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

export default Product;