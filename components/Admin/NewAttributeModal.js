import { useEffect, useState } from 'react';
import XIcon from '../ui/icons/XIcon';
import SizeInput from './SizeInput';

function NewAttributeModal({ sizes, toggleNewAttributeModal, handleChangeNewAttr, newAttr, handleAddNewAttribute }) {

    const [palette, setPalette] = useState(newAttr.palette ?? ["", ""])

    useEffect(() => {

        return () => setPalette(["", ""])

    }, [])

    function handleChangePalette(index, value) {
        setPalette(prevState => {
            let newValue = [...prevState]
            newValue[index] = value
            return newValue;
        })
    }

    useEffect(() => {

        if (palette[0] && palette[1] && palette[0].length > 3 && palette[1].length > 3) {
            handleChangeNewAttr('palette', palette)
        }

    }, [palette])

    const [selectedSizes, setSelectedSizes] = useState([])

    useEffect(() => {

        handleChangeNewAttr('sizes', selectedSizes)

    }, [selectedSizes])

    function handleSelectSize(selectedSize) {
        setSelectedSizes(prevState => {
            let selectedSizesIns = [...prevState]
            let isExists = selectedSizesIns.findIndex(size => size.sizeId === selectedSize.sizeId)

            if (isExists !== -1) {
                selectedSizesIns[isExists] = selectedSize
                return selectedSizesIns
            }

            return [...prevState, selectedSize]
        })
    }

    return (
        <div className="center-win z-[9999] rounded-md p-5 flex flex-col gap-y-4 bg-gray-700 shadow-md w-4/5">
            <div className="flex justify-between items-center">
                <span className='text-white text-lg font-semibold'>Add New Attribute</span>
                <span onClick={toggleNewAttributeModal} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                    <XIcon />
                </span>
            </div>

            <div className='flex flex-col gap-y-2'>


                <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Color Name</label>
                    <input
                        onChange={e => handleChangeNewAttr("color_name", e.target.value)}
                        value={newAttr?.color_name ?? ""}
                        className='col-span-1 bg-gray-600 text-white outline-none rounded-md px-5 py-2 text-lg' placeholder='black' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Image Url</label>
                    <input
                        onChange={e => handleChangeNewAttr("image", e.target.value)}
                        value={newAttr?.image ?? ""}
                        className='col-span-1 bg-gray-600 text-white outline-none rounded-md px-5 py-2 text-lg' placeholder='/example/example.png' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Color Palette</label>
                    <div className='grid grid-cols-2 gap-x-2'>
                        <input
                            onChange={e => handleChangePalette(0, e.target.value)}
                            value={palette[0]} className='col-span-1 bg-gray-600 text-white outline-none rounded-md px-5 py-2 text-lg' placeholder='#000' />
                        <input
                            onChange={e => handleChangePalette(1, e.target.value)}
                            value={palette[1]} className='col-span-1 bg-gray-600 text-white outline-none rounded-md px-5 py-2 text-lg' placeholder='#fff' />
                    </div>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Color Price Increase</label>
                    <input
                        onChange={e => handleChangeNewAttr("price_increase", e.target.value)}
                        value={newAttr?.price_increase ?? ""}
                        className='col-span-1 bg-gray-600 text-white outline-none rounded-md px-5 py-2 text-lg' placeholder='0' />
                </div>

                <div className='flex flex-col gap-y-2'>
                    <label className='text-white'>Available Sizes</label>
                    <div className='grid grid-cols-12 gap-2'>
                        {sizes.map(size => (
                            <SizeInput key={size._id} selectedSizes={newAttr.sizes ?? []} size={size} handleSelectSize={handleSelectSize} />
                        ))}
                    </div>
                </div>

                <button onClick={handleAddNewAttribute} className='mt-4 bg-orange-200 rounded-md font-semibold text-gray-800 text-lg py-2'>Add Attribute</button>

            </div>
        </div>
    );
}

export default NewAttributeModal;