import PlusIcon from '../../ui/icons/PlusIcon';
import MapIcon from '../../ui/icons/MapIcon';
import TrashIcon from '../../ui/icons/TrashIcon';
import PencilIcon from '../../ui/icons/PencilIcon';
import { useState } from 'react';
import NewAddressModal from './NewAddressModal';

function Addresses() {

    const [newAddressVis, setNewAddressVis] = useState(false)

    function toggleNewAddressModal()
    {
        setNewAddressVis(prevState => !prevState)
    }

    return (
        <div className="relative mt-8 p-3 flex flex-col gap-y-2">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-300">Your Addresses</h2>
                <button onClick={toggleNewAddressModal} className="px-3 py-2 flex flex-nowrap gap-x-1 rounded-xl bg-red-500 text-white text-md">
                    <PlusIcon />
                    <span>New Address</span>
                </button>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-4'>

                <div className='relative rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex'>

                    <div className="absolute bottom-3 right-3 z-10 flex border-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-600 overflow-hidden">
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-yellow-300 hover:border-red-100 transition-all duration-300">
                            <PencilIcon />
                        </span>
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-red-400 hover:border-red-100 transition-all duration-300">
                            <TrashIcon />
                        </span>
                    </div>

                    <div className='w-[20%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                        <span className='scale-[250%]'>
                            <MapIcon />
                        </span>
                    </div>

                    <div className='w-[80%] p-3 text-gray-200 text-xl flex flex-col gap-y-2'>
                        <span>United States, Florida, Jesus St.</span>
                        <span>John Smith</span>
                        <span>+1 545 9612</span>
                    </div>
                </div>
                <div className='relative rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex'>

                    <div className="absolute bottom-3 right-3 z-10 flex border-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-600 overflow-hidden">
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-yellow-300 hover:border-red-100 transition-all duration-300">
                            <PencilIcon />
                        </span>
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-red-400 hover:border-red-100 transition-all duration-300">
                            <TrashIcon />
                        </span>
                    </div>

                    <div className='w-[20%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                        <span className='scale-[250%]'>
                            <MapIcon />
                        </span>
                    </div>

                    <div className='w-[80%] p-3 text-gray-200 text-xl flex flex-col gap-y-2'>
                        <span>United States, Florida, Jesus St.</span>
                        <span>John Smith</span>
                        <span>+1 545 9612</span>
                    </div>
                </div>
                <div className='relative rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex'>

                    <div className="absolute bottom-3 right-3 z-10 flex border-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-600 overflow-hidden">
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-yellow-300 hover:border-red-100 transition-all duration-300">
                            <PencilIcon />
                        </span>
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-red-400 hover:border-red-100 transition-all duration-300">
                            <TrashIcon />
                        </span>
                    </div>

                    <div className='w-[20%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                        <span className='scale-[250%]'>
                            <MapIcon />
                        </span>
                    </div>

                    <div className='w-[80%] p-3 text-gray-200 text-xl flex flex-col gap-y-2'>
                        <span>United States, Florida, Jesus St.</span>
                        <span>John Smith</span>
                        <span>+1 545 9612</span>
                    </div>
                </div>
                <div className='relative rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex'>

                    <div className="absolute bottom-3 right-3 z-10 flex border-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-600 overflow-hidden">
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-yellow-300 hover:border-red-100 transition-all duration-300">
                            <PencilIcon />
                        </span>
                        <span className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-red-400 hover:border-red-100 transition-all duration-300">
                            <TrashIcon />
                        </span>
                    </div>

                    <div className='w-[20%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                        <span className='scale-[250%]'>
                            <MapIcon />
                        </span>
                    </div>

                    <div className='w-[80%] p-3 text-gray-200 text-xl flex flex-col gap-y-2'>
                        <span>United States, Florida, Jesus St.</span>
                        <span>John Smith</span>
                        <span>+1 545 9612</span>
                    </div>
                </div>

            </div>

            {newAddressVis && (<NewAddressModal toggle={toggleNewAddressModal} />)}

        </div>
    );
}

export default Addresses;