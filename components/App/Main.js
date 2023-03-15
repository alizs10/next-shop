import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import TopCurve from './TopCurve'
import BottomCurve from './BottomCurve'
import SolidStarIcon from '../ui/icons/SolidStarIcon';
import NikeIcon from '../ui/icons/NikeIcon'
import Products from './Products'

function Main() {
    return (
        <div className="mt-10 w-full h-full lg:pt-20 xl:pt-0 grid grid-cols-7 gap-y-2">

            <div className="p-3 xl:pl-20 col-span-7 z-10 lg:col-span-3 flex flex-col gap-y-4 font-sans">
                <Image className="w-14 mb-2" src='/assets/icons/nike-logo-text.png' width={80} height={60} />
                <span>
                    <h1 className="flex flex-col lg:leading-[100px] xl:leading-[110px] 2xl:leading-[120px]">
                        <strong className="text-orange-200/90 inline-block text-5xl sm:text-9xl lg:text-[100px] 2xl:text-[120px] break-words font-bold">BORING</strong>
                        <strong className="text-orange-200/90 text-3xl lg:text-[80px] 2xl:text-[100px] sm:text-7xl font-bold">SHOES?</strong>
                    </h1>
                    <span className="text-white text-md sm:text-lg lg:text-xl xl:text-2xl">Let Us <strong>HELP</strong> you fix it...</span>
                </span>

                <button className="mt-4 w-fit text-xs sm:text-lg lg:text-xl font-semibold lg:font-bold text-white rounded-lg sm:rounded-xl bg-red-500/100 py-1 px-3 sm:py-2 sm:px-5">EXPLORE OUT STORE</button>
            </div>

            <div className="col-span-7 xl:mt-24 lg:col-span-4 relative flex flex-col items-center">


                <div className="relative lg:absolute lg:top-0 xl:top-[-20%] lg:-left-36 flex flex-col w-full h-full">
                    <Image className="rotate-[-32deg] z-50 w-full lg:w-[90%] 2xl:w-[80%] py-20" src={'/assets/nike-shoe-rmed-bg.png'} width={600} height={600} />
                    <span className="absolute top-[35%] lg:top-[-10%] xl:top-[-20] 2xl:top-[-40%] lg:left-[-40%] xl:left-[-47%] rotate-[-15deg] w-[150%] lg:w-[250%] fill-gray-400 opacity-20">
                        <NikeIcon />
                    </span>
                </div>



                <div className="lg:absolute top-0 lg:-top-[30%] xl:top-[-40%] pr-4 right-64 lg:right-[5%] xl:right-[8%] flex flex-col gap-y-16 lg:gap-y-8 xl:gap-y-4 2xl:gap-y-10">

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

                <div className="lg:absolute -bottom-10 left-[16rem] lg:left-[30%] xl:left-[18vw] 2xl:left-[35%] lg:-bottom-[15%] xl:bottom-[-35%] 2xl:bottom-[-23%] mt-10 flex flex-row items-center gap-x-2">

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

            <Products />

        </div>
    );
}

export default Main;