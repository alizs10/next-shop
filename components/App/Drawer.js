import useAppStore from '../../stores/app-store'
import NikeIcon from '../ui/icons/NikeIcon';
import XIcon from '../ui/icons/XIcon';
import UserIcon from '../ui/icons/UserIcon';
import LoginIcon from '../ui/icons/LoginIcon';
import ShoppingCartIcon from '../ui/icons/ShoppingCartIcon';
import RectanglesGroupIcon from '../ui/icons/RectanglesGroupIcon';
import LogoutIcon from '../ui/icons/LogoutIcon';
import InformationCircleIcon from '../ui/icons/InformationCircleIcon';
import PhoneIcon from '../ui/icons/PhoneIcon';
import QuestionMarkCircleIcon from '../ui/icons/QuestionMarkCircleIcon';
import TruckIcon from '../ui/icons/TruckIcon';
import CubeIcon from '../ui/icons/CubeIcon';

import userStore from '../../stores/user-store';
import { motion } from 'framer-motion';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import BackdropWrapper from '../Common/BackdropWrapper';
import { clearCart } from '../../helpers/cart-helpers';

function Drawer() {

    const { user } = userStore()


    async function handleSignOut(e) {
        e.preventDefault();
        clearCart()
        signOut({ callbackUrl: process.env.APP_URL })
    }

    const { toggleDrawer } = useAppStore()

    const listStyle = "w-full border-b-2 transition-all duration-300 hover:border-red-500 hover:text-red-500 cursor-pointer border-gray-500 text-center py-3 flex items-center gap-x-2";

    return (

        <BackdropWrapper handleClick={toggleDrawer}>

            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ bounce: "none", duration: ".3" }}
                onClick={e => e.stopPropagation()}
                className="shadow-md shadow-black w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col gap-y-2 h-full bg-gray-700">
                <div className='py-5 px-10 flex justify-between items-center'>
                    <span className='fill-white w-16'>
                        <NikeIcon />
                    </span>
                    <span onClick={toggleDrawer} className='hover:bg-gray-600 transition-all duration-300 p-1 rounded-md cursor-pointer text-red-500 scale-125'>
                        <XIcon />
                    </span>
                </div>


                <ul className='flex flex-col mt-10 w-full px-10 items-center gap-y-4 text-xl text-gray-200'>
                    {!user && (
                        <Link className='w-full' href="/auth/login">
                            <li className={listStyle}>
                                <span>
                                    <LoginIcon />
                                </span>
                                <span>Login/Register</span>
                            </li>
                        </Link>
                    )}
                    {user && (
                        <Link className='w-full' href="/profile">
                            <li className={listStyle}>
                                <span>
                                    <UserIcon />
                                </span>
                                <span>Profile</span>
                            </li>
                        </Link>
                    )}
                    <Link className='w-full' href="/cart">
                        <li className={listStyle}>
                            <span>
                                <ShoppingCartIcon />
                            </span>
                            <span>Cart</span>
                        </li>
                    </Link>
                    <li className={listStyle}>
                        <span>
                            <RectanglesGroupIcon />
                        </span>
                        <span>Categories</span>
                    </li>

                    <li className={listStyle}>
                        <span>
                            <CubeIcon />
                        </span>
                        <span>Packaging</span>
                    </li>
                    <li className={listStyle}>
                        <span>
                            <TruckIcon />
                        </span>
                        <span>Delivery</span>
                    </li>
                    <li className={listStyle}>
                        <span>
                            <QuestionMarkCircleIcon />
                        </span>
                        <span>FAQ</span>
                    </li>
                    <li className={listStyle}>
                        <span>
                            <PhoneIcon />
                        </span>
                        <span>Contact</span>
                    </li>
                    <li className={listStyle}>
                        <span>
                            <InformationCircleIcon />
                        </span>
                        <span>About</span>
                    </li>
                    {user && (
                        <li onClick={handleSignOut} className={listStyle}>
                            <span>
                                <LogoutIcon />
                            </span>
                            <span>Logout</span>
                        </li>
                    )}
                </ul>

                <div className='mt-auto py-5 px-10 bg-black/20 text-white text-sm'>
                    Designed & Developed by @alizs10
                </div>
            </motion.div>

        </BackdropWrapper>
    );
}

export default Drawer;