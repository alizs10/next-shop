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
        <div className="mt-6 w-full h-full lg:pt-20 grid grid-cols-7 gap-y-2">

            <div className="p-3 xl:pl-20 xl:pt-32 col-span-7 z-10 lg:col-span-3 flex flex-col gap-y-4 font-sans">
                <Image className="w-14 mb-2" src='/assets/icons/nike-logo-text.png' width={80} height={60} />
                <span>
                    <h1 className="flex flex-col lg:leading-[100px] xl:leading-[120px]">
                        <strong className="text-orange-200/90 inline-block text-5xl sm:text-9xl lg:text-[100px] xl:text-[150px] break-words font-bold">BORING</strong>
                        <strong className="text-orange-200/90 text-3xl lg:text-[80px] xl:text-[100px] sm:text-7xl font-bold">SHOES?</strong>
                    </h1>
                    <span className="text-white text-md sm:text-lg lg:text-xl xl:text-2xl">Let Us <strong>HELP</strong> you fix it...</span>
                </span>

                <button className="mt-4 w-fit text-xs sm:text-lg lg:text-xl font-semibold lg:font-bold text-white rounded-lg sm:rounded-xl bg-red-500/100 py-1 px-3 sm:py-2 sm:px-5">EXPLORE OUT STORE</button>
            </div>

            <div className="col-span-7 xl:mt-44 lg:col-span-4 relative flex flex-col items-center">


                <div className="relative lg:absolute lg:top-0 lg:-left-36 flex flex-col w-full h-full">
                    <Image className="rotate-[-32deg] z-50 w-full py-20" src={'/assets/nike-shoe-rmed-bg.png'} width={600} height={600} />
                    <span className="absolute top-[35%] lg:top-0 lg:left-[-40%] rotate-[-15deg] w-[150%] lg:w-[250%] fill-gray-400 opacity-20">
                        <NikeIcon />
                    </span>
                </div>



                <div className="lg:absolute top-0 lg:-top-[25%] pr-4 right-64 lg:right-0 flex flex-col gap-y-16 lg:gap-y-4">

                    <TopCurve />
                    <div className="mt-20 lg:mt-0 self-end flex lg:flex-col gap-4">
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

                <div className="lg:absolute -bottom-10 left-[16rem] lg:left-[30%] lg:-bottom-[15%] mt-10 flex flex-row items-center gap-x-2">

                    <ChevronLeftIcon fontSize={'7xl'} color={'white'} />

                    <div className="flex flex-col gap-y-1 items-center">
                        <h2 className="font-bold text-white italic text-2xl lg:text-lg">NIKE AIR MAX III</h2>
                        <div className="flex flex-nowrap gap-x-[1px] items-center">
                            <div className="flex flex-nowrap">
                                <span className="text-yellow-500 lg:scale-75">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-yellow-500 lg:scale-75">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-yellow-500 lg:scale-75">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-yellow-500 lg:scale-75">
                                    <SolidStarIcon />
                                </span>
                                <span className="text-white lg:scale-75">
                                    <SolidStarIcon />
                                </span>

                            </div>
                            <span className="text-gray-400 text-3xl lg:text-xl">|</span>
                            <span className="font-bold text-xl lg:text-lg text-orange-200/90">$149</span>
                        </div>
                        <button className="px-7 lg:px-3 py-1 border-4 rounded-xl border-red-500 font-bold text-lg lg:text-xs text-red-500">BUY NOW</button>
                    </div>

                    <ChevronRightIcon fontSize={'7xl'} color={'red.500'} />

                </div>



            </div>

            <div className="col-span-7 h-fit mt-auto flex flex-col justify-end lg:mt-20 pb-10 gap-y-6">

                <div className="mt-10 self-center lg:self-end lg:pr-20 flex gap-x-4 items-center">

                    <span className="text-red-500">
                        <ArrowLeftIcon />
                    </span>
                    <span className="text-white rounded-full p-1 bg-red-500">
                        <ArrowRightIcon />
                    </span>

                </div>

                {/* products */}
                <div className="w-full py-2 px-10 lg:pr-2 overflow-x-scroll no-scrollbar overflow-y-hidden flex gap-x-12 items-center flex-nowrap">

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