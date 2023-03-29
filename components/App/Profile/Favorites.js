import Image from "next/image";
import SolidStarIcon from '../../ui/icons/SolidStarIcon';
import HeartIcon from '../../ui/icons/HeartIcon';
import SolidHeartIcon from '../../ui/icons/SolidHeartIcon';
import PlusIcon from '../../ui/icons/PlusIcon';
import { useState } from "react";
import { handlePostFavoriteProduct } from '../../../helpers/api-helpers';


function NoFavorite() {

    return (
        <div className="pt-24 w-full flex flex-col justify-center items-center gap-y-4 text-gray-400">

            <span className="font-bold text-4xl">You Have Not any Favorites</span>
            <span className="text-2xl">Add your first favorite shoe...</span>

        </div>
    )
}

function Favorites({ favorites }) {

    const [products, setProducts] = useState(favorites)

    async function toggleProductToFavorite(productId) {

        let result = await handlePostFavoriteProduct(productId)

        if (result.status !== 200) return

        var data = await result.json()

        setProducts(prevState => {
            let productsIns = [...prevState]
            let productIndex = productsIns.findIndex(pr => pr._id === productId)
            productsIns[productIndex] = { ...productsIns[productIndex], isFavorite: data.isFavorite };

            return [...productsIns];
        })

    }

    return products.length === 0 ? (<NoFavorite />) : (

        <div className="mt-8 p-3 grid grid-cols-4 gap-4">
            {products.map(fav => (
                <div key={fav._id} className="col-span-1 p-3 rounded-xl bg-gray-700 shadow-md flex flex-col gap-y-1">
                    <div className="w-full px-5 py-8">
                        <Image className="w-full" src={fav.image} alt={fav.name} width={200} height={200} />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-lg font-bold">{fav.name}</span>
                        <div className="w-fit bg-gray-600 p-[5px] rounded-md flex flex-nowrap gap-[4px]">
                            {fav.attributes.map((attr, index) => (
                                index < 3 && (<div style={{ backgroundColor: attr.palette[0] }} className="w-2 h-2 rounded-full"></div>)
                            ))}
                            {fav.attributes.length > 2 && (
                                <div className="w-2 h-2 scale-150 text-gray-300 flex justify-center items-center">
                                    <PlusIcon />
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="flex flex-nowrap gap-x-0">

                        {fav.stars.map((star, index) => {
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

                    <div className="mt-auto flex items-end justify-between">
                        <span className="font-bold text-white text-xl">$ {fav.price}</span>
                        <div onClick={() => toggleProductToFavorite(fav._id)} className="w-10 cursor-pointer text-gray-400 bg-gray-600 aspect-square rounded-md flex justify-center items-center">
                            {fav.isFavorite ? (<span className='text-red-500'><SolidHeartIcon /></span>) : (<HeartIcon />)}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Favorites;