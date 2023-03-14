import { AnimatePresence } from 'framer-motion';
import useAppStore from '../../stores/app-store'
import NikeIcon from '../ui/icons/NikeIcon';
import XIcon from '../ui/icons/XIcon';

import { motion } from 'framer-motion';

function Drawer() {

    const { drawerVis, toggleDrawer } = useAppStore()

    const listStyle = "w-full border-b-2 transition-all duration-300 hover:border-red-500 hover:text-red-500 cursor-pointer border-gray-500 text-center py-3";

    return (
        <AnimatePresence>
            {drawerVis && (
                <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "0" }}
                    exit={{ left: "-100%" }}
                    transition={{ bounce: "none", duration: ".3" }}
                    className="fixed top-0 left-0 shadow-md shadow-black w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-y-2 h-screen bg-gray-700 z-[9999]">
                    <div className='p-5 flex justify-between items-center'>
                        <span className='fill-white w-16'>
                            <NikeIcon />
                        </span>
                        <span onClick={toggleDrawer} className='hover:bg-gray-600 transition-all duration-300 p-1 rounded-md cursor-pointer text-red-500 scale-125'>
                            <XIcon />
                        </span>
                    </div>


                    <ul className='flex flex-col mt-10 w-full px-14 items-center gap-y-4 text-xl text-gray-200'>
                        <li className={listStyle}>Login/Register</li>
                        <li className={listStyle}>Cart</li>
                        <li className={listStyle}>Categories</li>
                        <li className={listStyle}>FAQ</li>
                        <li className={listStyle}>Contact</li>
                        <li className={listStyle}>About</li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Drawer;