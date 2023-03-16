import HeartIcon from '../../ui/icons/HeartIcon';
import SolidStarIcon from '../../ui/icons/SolidStarIcon';
import Image from "next/image";


function Product() {
    return (
        <div className="h-fit flex min-w-[400px] z-20">
            <div className="relative w-[35%] rounded-l-3xl aspect-square bg-emerald-500">
                <Image className="absolute bottom-6 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
            </div>
            <div className="w-[65%] bg-white rounded-r-3xl flex flex-col gap-y-0 p-2 px-5">
                <h6 className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</h6>
                <div className="flex flex-nowrap">
                    <span className="text-yellow-500 scale-90">
                        <SolidStarIcon />
                    </span>
                    <span className="text-yellow-500 scale-90">
                        <SolidStarIcon />
                    </span>
                    <span className="text-yellow-500 scale-90">
                        <SolidStarIcon />
                    </span>
                    <span className="text-yellow-500 scale-90">
                        <SolidStarIcon />
                    </span>
                    <span className="text-gray-200 scale-90">
                        <SolidStarIcon />
                    </span>

                </div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold font-sans text-gray-800 text-md">$189</span>
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