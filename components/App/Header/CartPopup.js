import Image from "next/image";
import XIcon from "../../ui/icons/XIcon";
import TrashIcon from "../../ui/icons/TrashIcon";
import { AnimatePresence } from "framer-motion";
import useAppStore from "../../../stores/app-store";

import { motion } from 'framer-motion';

function CartPopup() {

    const { cartPopupVis, toggleCartPopup } = useAppStore()

    return (
        <AnimatePresence>
            {cartPopupVis && (

                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [0.5, 1], opacity: [0, 1] }}
                    exit={{ scale: [1, 0.5], opacity: [1, 0] }}
                    transition={{ bounce: "spring", duration: "0.3" }}
                    className="absolute top-0 right-0 flex flex-col gap-y-4 z-[900] shadow-lg w-[350px] p-5 bg-red-600 rounded-3xl">
                    <div className='flex justify-between items-center'>
                        <div className="flex gap-x-2 items-end">
                            <span className='text-white text-xl font-semibold'>
                                Cart
                            </span>
                            <span className="text-sm w-6 aspect-square bg-white flex justify-center items-center text-red-500 font-bold rounded-md">6</span>
                        </div>
                        <span onClick={toggleCartPopup} className='hover:bg-red-700 transition-all duration-300 p-1 rounded-md cursor-pointer text-gray-300 scale-125'>
                            <XIcon />
                        </span>
                    </div>


                    <ul className="flex flex-col gap-y-2 max-h-[50vh] overflow-y-scroll no-scrollbar">
                        <li className="relative flex items-center bg-white rounded-xl">
                            <span className="absolute bottom-0 right-0 z-10 p-2 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-500 hover:border-red-100 transition-all duration-300 border-l-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-200">
                                <TrashIcon />
                            </span>

                            <div className="relative w-[35%] flex items-center aspect-square">
                                <Image className="w-full p-2" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
                            </div>

                            <div className="relative w-[75%] p-1 flex flex-col gap-y-1">
                                <span className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</span>
                                <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                    <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                                    <div className="w-1/2 h-full bg-green-800"></div>
                                </div>
                                <span className="font-sans text-gray-800 text-md">Size: 6</span>
                                <span className="font-sans text-gray-800 font-bold text-md">$189</span>

                            </div>


                        </li>
                        <li className="relative flex items-center bg-white rounded-xl">
                            <span className="absolute bottom-0 right-0 z-10 p-2 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-500 hover:border-red-100 transition-all duration-300 border-l-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-200">
                                <TrashIcon />
                            </span>

                            <div className="relative w-[35%] flex items-center aspect-square">
                                <Image className="w-full p-2" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
                            </div>

                            <div className="relative w-[75%] p-1 flex flex-col gap-y-1">
                                <span className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</span>
                                <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                    <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                                    <div className="w-1/2 h-full bg-green-800"></div>
                                </div>
                                <span className="font-sans text-gray-800 text-md">Size: 6</span>
                                <span className="font-sans text-gray-800 font-bold text-md">$189</span>

                            </div>


                        </li>
                        <li className="relative flex items-center bg-white rounded-xl">
                            <span className="absolute bottom-0 right-0 z-10 p-2 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-500 hover:border-red-100 transition-all duration-300 border-l-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-200">
                                <TrashIcon />
                            </span>

                            <div className="relative w-[35%] flex items-center aspect-square">
                                <Image className="w-full p-2" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
                            </div>

                            <div className="relative w-[75%] p-1 flex flex-col gap-y-1">
                                <span className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</span>
                                <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                    <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                                    <div className="w-1/2 h-full bg-green-800"></div>
                                </div>
                                <span className="font-sans text-gray-800 text-md">Size: 6</span>
                                <span className="font-sans text-gray-800 font-bold text-md">$189</span>

                            </div>


                        </li>
                        <li className="relative flex items-center bg-white rounded-xl">
                            <span className="absolute bottom-0 right-0 z-10 p-2 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-500 hover:border-red-100 transition-all duration-300 border-l-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-200">
                                <TrashIcon />
                            </span>

                            <div className="relative w-[35%] flex items-center aspect-square">
                                <Image className="w-full p-2" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
                            </div>

                            <div className="relative w-[75%] p-1 flex flex-col gap-y-1">
                                <span className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</span>
                                <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                    <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                                    <div className="w-1/2 h-full bg-green-800"></div>
                                </div>
                                <span className="font-sans text-gray-800 text-md">Size: 6</span>
                                <span className="font-sans text-gray-800 font-bold text-md">$189</span>

                            </div>


                        </li>
                        <li className="relative flex items-center bg-white rounded-xl">
                            <span className="absolute bottom-0 right-0 z-10 p-2 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-500 hover:border-red-100 transition-all duration-300 border-l-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-200">
                                <TrashIcon />
                            </span>

                            <div className="relative w-[35%] flex items-center aspect-square">
                                <Image className="w-full p-2" src={'/assets/nike-shoe-rmed-bg.png'} width={200} height={200} />
                            </div>

                            <div className="relative w-[75%] p-1 flex flex-col gap-y-1">
                                <span className="font-semibold font-sans text-gray-800 text-md">AIR MAX PEGASUS 37</span>
                                <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                    <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                                    <div className="w-1/2 h-full bg-green-800"></div>
                                </div>
                                <span className="font-sans text-gray-800 text-md">Size: 6</span>
                                <span className="font-sans text-gray-800 font-bold text-md">$189</span>

                            </div>


                        </li>
                    </ul>

                    <div className="flex flex-col gap-y-2">
                        <span className="font-bold text-lg text-white">Pay Amount: 768 $</span>
                        <button className="rounded-xl bg-white text-red-500 font-bold w-full py-2">
                            Check Out
                        </button>
                    </div>

                </motion.div>
            )}

        </AnimatePresence>
    );
}

export default CartPopup;