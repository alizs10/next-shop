import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Border from './Border'
import SolidStarIcon from '../ui/icons/SolidStarIcon';
import HeartIcon from '../ui/icons/HeartIcon';
import ArrowRightIcon from '../ui/icons/ArrowRightIcon'
import ArrowLeftIcon from '../ui/icons/ArrowLeftIcon'

function Main() {
    return (
        <div className="h-full grid grid-cols-7 gap-2">

            <div className="pl-20 pt-32 col-span-3 flex flex-col font-sans">
                <Image className="w-14 mb-2" src='/assets/icons/nike-logo-text.png' width={80} height={60} />
                <strong className="text-orange-200/90 inline-block text-[150px] leading-[120px] break-words font-bold">BORING</strong>
                <strong className="text-orange-200/90 text-[100px] leading-[120px] font-bold">SHOES?</strong>
                <span className="text-white text-2xl">Let Us <strong>HELP</strong> you fix it...</span>

                <button className="mt-10 w-fit text-md font-bold text-white rounded-xl bg-red-500/100 py-2 px-5">EXPLORE OUT STORE</button>
            </div>

            <div className="col-span-4 relative flex items-center">

                <div className="absolute -bottom-10 left-[20rem] flex flex-row items-center gap-x-2">

                    <ChevronLeftIcon fontSize={'7xl'} color={'white'} />

                    <div className="flex flex-col gap-y-1 items-center">
                        <h2 className="font-bold text-white text-xl">NIKE AIR MAX III</h2>
                        <div className="flex flex-nowrap gap-x-[1px] items-center">
                            <div className="flex flex-nowrap">
                                <span className="text-yellow-500">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-yellow-500">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-yellow-500">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-yellow-500">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-white">
                                    <SolidStarIcon />
                                </span>

                            </div>
                            <span className="text-gray-400 text-3xl">|</span>
                            <span className="font-bold text-xl text-orange-200/90">$149</span>
                        </div>
                        <button className="px-7 py-1 border-4 rounded-xl border-red-500 font-bold text-lg text-red-500">BUY NOW</button>
                    </div>

                    <ChevronRightIcon fontSize={'7xl'} color={'red.500'} />

                </div>

                <div className="absolute -top-20 right-60 flex flex-col gap-y-0">
                    <Border deg={-40} />
                    <div className="self-end flex flex-col gap-y-4">
                        <div className="w-8 h-8 mx-auto rounded-full rotate-12 border-white border-2 flex flex-nowrap overflow-hidden">
                            <div className="w-1/2 h-full border-r-2 border-white bg-red-500"></div>
                            <div className="w-1/2 h-full bg-white"></div>
                        </div>
                        <div className="w-12 h-12 mx-auto rounded-full border-white border-2 flex flex-nowrap overflow-hidden">
                            <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                            <div className="w-1/2 h-full bg-green-800"></div>
                        </div>
                        <div className="w-8 h-8 mx-auto -rotate-12 rounded-full border-white border-2 flex flex-nowrap overflow-hidden">
                            <div className="w-1/2 h-full border-r-2 border-white bg-blue-500"></div>
                            <div className="w-1/2 h-full bg-white"></div>
                        </div>
                    </div>
                    <Border deg={55} />
                </div>

                <div className="absolute top-16 -left-32">
                    <Image className="rotate-[-27deg] scale-[140%]" src={'/assets/nike-shoe-rmed-bg.png'} width={600} height={600} />
                </div>


            </div>

            <div className="col-span-7 h-fit mt-auto flex flex-col justify-end pb-10 gap-y-6">

                <div className="self-end pr-20 flex gap-x-4 items-center">

                    <span className="text-red-500">
                        <ArrowLeftIcon />
                    </span>
                    <span className="text-white rounded-full p-1 bg-red-500">
                        <ArrowRightIcon />
                    </span>

                </div>

                <div className="w-full ml-20 pl-10 pr-24 overflow-x-scroll overflow-y-hidden flex gap-x-12 items-center flex-nowrap">

                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-emerald-500">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-blue-500">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-yellow-200">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-pink-300">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-emerald-500">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-emerald-500">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-emerald-500">
                            <Image className="absolute top-2 scale-125 -left-10 rotate-[-30deg]" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
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


                </div>
            </div>


        </div>
    );
}

export default Main;