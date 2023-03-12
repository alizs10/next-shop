import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import TopCurve from './TopCurve'
import BottomCurve from './BottomCurve'
import SolidStarIcon from '../ui/icons/SolidStarIcon';
import HeartIcon from '../ui/icons/HeartIcon';
import ArrowRightIcon from '../ui/icons/ArrowRightIcon'
import ArrowLeftIcon from '../ui/icons/ArrowLeftIcon'
import NikeIcon from '../ui/icons/NikeIcon'

function Main() {
    return (
        <div className="mt-6 w-full h-full grid grid-cols-7 gap-2">

            <div className="p-3 lg:pl-20 lg:pt-32 col-span-7 lg:col-span-3 flex flex-col gap-y-4 font-sans">
                <Image className="w-14 mb-2" src='/assets/icons/nike-logo-text.png' width={80} height={60} />
                <span>
                    <h1>
                        <strong className="text-orange-200/90 inline-block text-5xl sm:text-9xl lg:text-[150px] lg:leading-[120px] break-words font-bold">BORING</strong>
                        <strong className="text-orange-200/90 text-3xl lg:text-[100px] sm:text-7xl lg:leading-[120px] font-bold">SHOES?</strong>
                    </h1>
                    <span className="text-white text-md sm:text-lg lg:text-2xl">Let Us <strong>HELP</strong> you fix it...</span>
                </span>

                <button className="mt-4 w-fit text-xs sm:text-lg lg:text-xl font-semibold lg:font-bold text-white rounded-lg sm:rounded-xl bg-red-500/100 py-1 px-3 sm:py-2 sm:px-5">EXPLORE OUT STORE</button>
            </div>

            <div className="col-span-7 lg:col-span-4 relative flex flex-col items-center">


                <div className="relative w-full h-full flex flex-col">
                    <Image className="absolute top-0 left-0 rotate-[-32deg] mt-44 z-50 scale-95 sm:scale-110 lg:scale-[110%]" src={'/assets/nike-shoe-rmed-bg.png'} width={600} height={600} />
                    <span className="absolute left-8 bottom-0 rotate-[-15deg] scale-[220%] w-full fill-gray-400 opacity-20">
                        <NikeIcon />
                    </span>
                </div>



                <div className="lg:absolute top-0 pr-4 right-64 flex flex-col gap-y-16">

                    <TopCurve />
                    <div className="mt-32 lg:mt-0 self-end flex lg:flex-col gap-4">
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
                    <BottomCurve />

                </div>

                <div className="lg:absolute -bottom-10 left-[16rem] mt-10 flex flex-row items-center gap-x-2">

                    <ChevronLeftIcon fontSize={'7xl'} color={'white'} />

                    <div className="flex flex-col gap-y-1 items-center">
                        <h2 className="font-bold text-white italic text-2xl">NIKE AIR MAX III</h2>
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



            </div>

            <div className="col-span-7 h-fit mt-auto flex flex-col justify-end pb-10 gap-y-6">

                <div className="mt-10 self-center lg:self-end lg:pr-20 flex gap-x-4 items-center">

                    <span className="text-red-500">
                        <ArrowLeftIcon />
                    </span>
                    <span className="text-white rounded-full p-1 bg-red-500">
                        <ArrowRightIcon />
                    </span>

                </div>

                {/* products */}
                <div className="w-full lg:ml-20 py-2 px-10 lg:pr-24 overflow-x-scroll no-scrollbar overflow-y-hidden flex gap-x-12 items-center flex-nowrap">

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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-blue-500">
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-yellow-200">
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
                    <div className="h-fit flex min-w-[400px] z-20">
                        <div className="relative w-[35%] rounded-l-3xl aspect-square bg-pink-300">
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


                </div>
            </div>


        </div>
    );
}

export default Main;