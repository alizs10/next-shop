import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { useState } from 'react';
import Backdrop from '../../ui/Backdrop';
import UserIcon from '../../ui/icons/UserIcon'
import HeartIcon from '../../ui/icons/HeartIcon'
import MapIcon from '../../ui/icons/MapIcon'
import ListIcon from '../../ui/icons/ListIcon'
import LogoutIcon from '../../ui/icons/LogoutIcon'
import { signOut } from 'next-auth/react';
import userStore from '../../../stores/user-store';

function UserPopup({ user }) {

    const removeUser = userStore(state => state.removeUser)
    const [showPopup, setShowPopup] = useState(true)

    function togglePopup() {
        setShowPopup(prevState => !prevState)
    }

    async function handleSignOut() {
        signOut({ redirect: false })
        removeUser()
    }

    return (
        <div className='relative p-3 rounded-xl'>
            <button onClick={togglePopup} className={`scale-110 p-3 rounded-xl transition-all duration-100 ${showPopup && 'bg-gray-100'}`}>
                <UserIcon />
            </button>

            {showPopup && (
                <>
                    <div className='absolute z-[999999] top-20 right-0 min-w-[250px] overflow-hidden flex flex-col rounded-xl border-2 border-gray-200 bg-gray-50'>
                        <div className='flex justify-between p-3 items-center border-b-2 bg-gray-50 border-gray-200 cursor-pointer'>
                            <div className='flex items-center gap-x-2'>
                                <Image className='w-10 rounded-full' src="/assets/avatars/avatar.jpeg" width={200} height={200} />
                                <div className='flex flex-col'>
                                    <span className='text-lg'>{user.fullName}</span>
                                    <span className='text-xs text-gray-500'>{user.email}</span>

                                </div>
                            </div>
                            <span className='text-gray-500'>
                                <ChevronRightIcon />
                            </span>
                        </div>
                        <div className='flex gap-x-2 p-3 items-center text-gray-600 border-b-2 border-gray-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer'>
                            <span className='scale-[80%]'>
                                <HeartIcon />
                            </span>
                            <span className='text-sm'>Favorites</span>
                        </div>
                        <div className='flex gap-x-2 p-3 items-center text-gray-600 border-b-2 border-gray-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer'>
                            <span className='scale-[80%]'>
                                <ListIcon />
                            </span>
                            <span className='text-sm'>Orders</span>
                        </div>
                        <div className='flex gap-x-2 p-3 items-center text-gray-600 border-b-2 border-gray-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer'>
                            <span className='scale-[80%]'>
                                <MapIcon />
                            </span>
                            <span className='text-sm'>Addresses</span>
                        </div>
                        <div onClick={handleSignOut} className='flex gap-x-2 p-3 items-center text-gray-600 border-b-2 border-gray-100 transition-all duration-300 hover:bg-gray-100 cursor-pointer'>
                            <span className='scale-[80%]'>
                                <LogoutIcon />
                            </span>
                            <span className='text-sm'>Logout</span>
                        </div>
                    </div>
                    <Backdrop toggler={showPopup} handleClick={togglePopup} />
                </>
            )}
        </div>
    );
}

export default UserPopup;