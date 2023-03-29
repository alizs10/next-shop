import Image from "next/image";
import SolidStarIcon from '../../ui/icons/SolidStarIcon';
import SolidHeartIcon from '../../ui/icons/SolidHeartIcon';
import PlusIcon from '../../ui/icons/PlusIcon';

function Favorites({ favorites }) {

    return (
        <div className="mt-8 p-3 grid grid-cols-4 gap-4">

            {favorites.map(fav => (
                <div className="col-span-1 p-3 rounded-xl bg-gray-700 shadow-md flex flex-col gap-y-1">
                    <div className="w-full px-5 py-8">
                        <Image className="w-full" src={fav.product.image} alt={fav.product.name} width={200} height={200} />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-lg font-bold">{fav.product.name}</span>
                        <div className="w-fit bg-gray-600 p-[5px] rounded-md flex flex-nowrap gap-[4px]">
                            {fav.product.attributes.map((attr, index) => (
                                index < 3 && (<div style={{ backgroundColor: attr.palette[0] }} className="w-2 h-2 rounded-full"></div>)
                            ))}
                            {fav.product.attributes.length > 2 && (
                                <div className="w-2 h-2 scale-150 text-gray-300 flex justify-center items-center">
                                    <PlusIcon />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-nowrap gap-x-0">

                        {fav.product.stars.map((star, index) => {
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
                        <span className="font-bold text-white text-xl">$ {fav.product.price}</span>
                        <div className="w-10 cursor-pointer text-red-500 bg-gray-600 aspect-square rounded-md flex justify-center items-center">
                            <SolidHeartIcon />
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Favorites;