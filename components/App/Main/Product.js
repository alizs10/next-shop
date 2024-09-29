import HeartIcon from '../../ui/icons/HeartIcon';
import SolidHeartIcon from '../../ui/icons/SolidHeartIcon';
import SolidStarIcon from '../../ui/icons/SolidStarIcon';
import Image from "next/image";
import useAppStore from '../../../stores/app-store';
import useProductStore from '../../../stores/product-store';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../context/CartContext';

function Product({ product }) {

    const { shownProduct, setShownProduct, toggleMainAddToCartPopup, cartUpdate } = useAppStore()
    const { toggleProductToFavorite } = useProductStore()

    const { isProductExistsInCart } = useContext(CartContext)

    const [productExistence, setProductExistence] = useState(isProductExistsInCart(product))

    function handleSelectShowProduct(product) {
        setShownProduct(product)
    }

    useEffect(() => {

        setProductExistence(isProductExistsInCart(product))

    }, [cartUpdate])


    return (
        <div onClick={() => handleSelectShowProduct(product)} className={`h-fit cursor-pointer flex min-w-[400px] z-20 ${(shownProduct && shownProduct._id === product._id) ? 'outline-red-500' : 'outline-white'} bg-white outline outline-[3px] rounded-3xl transition-all duration-300`}>
            <div style={{ backgroundColor: product.attributes[0].palette[0] }} className="relative w-[35%] rounded-l-3xl aspect-square">
                <Image className="absolute bottom-6 scale-125 -left-10 rotate-[-30deg]" src={product.image} alt={product.name} width={200} height={200} />
            </div>
            <div className={`w-[65%] flex flex-col gap-y-0 pt-2 overflow-hidden rounded-r-3xl`}>
                <h6 className="pl-2 font-sans font-semibold text-gray-800 text-md">{product.name}</h6>
                <div className="flex flex-nowrap">

                    {Array(Math.floor(product.rating)).fill(true).map((_, i) => <span key={i} className="text-yellow-500 lg:scale-75">
                        <SolidStarIcon />
                    </span>)}
                    {Array(5 - Math.floor(product.rating)).fill(true).map((_, i) => <span key={i} className="lg:scale-75">
                        <SolidStarIcon />
                    </span>)}

                </div>
                <div className="flex items-center justify-between pl-2">
                    <span className="font-sans font-semibold text-gray-800 text-md">${product.price}</span>
                    <span onClick={() => toggleProductToFavorite(product._id)} className="pr-2 text-gray-500 transition-all duration-300 cursor-pointer hover:scale-125">
                        {product.isFavorite ? (<span className='text-red-500'><SolidHeartIcon /></span>) : (<HeartIcon />)}
                    </span>
                </div>
                <span className="pl-2 font-sans text-xs font-semibold text-gray-400">men's snikers</span>
                <button onClick={() => toggleMainAddToCartPopup(product)} className="w-full py-2 mt-2 font-sans font-semibold text-center text-red-500 transition-all duration-300 hover:bg-red-50 text-md">
                    {productExistence ? 'Added' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}

export default Product;