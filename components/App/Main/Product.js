import HeartIcon from '../../ui/icons/HeartIcon';
import SolidStarIcon from '../../ui/icons/SolidStarIcon';
import Image from "next/image";
import useAppStore from '../../../stores/app-store';


function Product({ product }) {

    const { shownProduct, setShownProduct } = useAppStore()

    function handleSelectShowProduct(product) {
        setShownProduct(product)
    }

    return (
        <div onClick={() => handleSelectShowProduct(product)} className={`h-fit cursor-pointer flex min-w-[400px] z-20 ${(shownProduct && shownProduct._id === product._id) ? 'outline-red-500' : 'outline-white'} bg-white outline outline-[3px] rounded-3xl transition-all duration-300`}>
            <div style={{ backgroundColor: product.attributes[0].palette[0] }} className="relative w-[35%] rounded-l-3xl aspect-square">
                <Image className="absolute bottom-6 scale-125 -left-10 rotate-[-30deg]" src={product.image} alt={product.name} width={200} height={200} />
            </div>
            <div className={`w-[65%] flex flex-col gap-y-0 p-2 px-5`}>
                <h6 className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</h6>
                <div className="flex flex-nowrap">

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
                <div className="flex justify-between items-center">
                    <span className="font-semibold font-sans text-gray-800 text-md">${product.price}</span>
                    <span className="text-gray-500 scale-75">
                        <HeartIcon />
                    </span>
                </div>
                <span className="font-semibold font-sans text-gray-400 text-xs">men's snikers</span>
                <button className="w-full mt-auto font-sans font-semibold text-center text-red-500 text-md">Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;