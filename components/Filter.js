import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ColorFilter from './Filters/ColorFilter'
import PriceRange from './Filters/PriceRange'
import SizeFilter from './Filters/SizeFilter'
import Backdrop from './ui/Backdrop'
import FilterIcon from './ui/icons/FilterIcon'

function Filter() {

    const [isOpen, setIsOpen] = useState(false)
    const openFilterPopover = () => {
        setIsOpen(true)
    }
    const closeFilterPopover = () => {
        setIsOpen(false)
    }

    // price range
    const [priceRangeValue, setPriceRangeValue] = useState([120, 240])
    const handlePriceRangeChange = value => {
        setPriceRangeValue(value)
    }

    // size filter
    const [sizes, setSizes] = useState([
        { id: "s1", size: "4", isChecked: false },
        { id: "s2", size: "5", isChecked: false },
        { id: "s3", size: "6", isChecked: false },
    ])

    const updateSizes = (e, sizeId) => {
        let sizesInstance = [...sizes]
        let updatableSizeIndex = sizesInstance.findIndex(size => size.id == sizeId)
        let updatableSize = sizesInstance[updatableSizeIndex]
        updatableSize.isChecked = e.target.checked;
        setSizes([...sizesInstance])
    }

    // color filter
    const [colors, setColors] = useState([
        { id: "c1", name: "red", isChecked: false },
        { id: "c2", name: "white", isChecked: false },
        { id: "c3", name: "blue", isChecked: false },
    ])

    const updateColors = (e, colorId) => {
        let colorsInstance = [...colors]
        let updatableColorIndex = colorsInstance.findIndex(color => color.id == colorId)
        let updatableColor = colorsInstance[updatableColorIndex]
        updatableColor.isChecked = e.target.checked;
        setColors([...colorsInstance])
    }


    useEffect(() => {
        console.log(colors);
    }, [colors])
    return (
        <>
            <div
                onClick={openFilterPopover}
                className={`absolute flex ${isOpen ? 'top-1/4 left-1/3 w-1/3 h-fit rounded-3xl flex-col gap-y-2 px-5 py-3 bg-gray-100 z-[60]' : 'z-40 hover:translate-x-2 top-1/2 justify-center items-center left-0 w-[6vmin] h-[17vmin] rounded-r-3xl bg-orange-200'}
        shadow-md cursor-pointer transition-all duration-300`}>
                <span className={`${isOpen ? 'text-xl mb-2' : '-rotate-90 text-md'} flex gap-x-2`}>
                    <span>
                        <FilterIcon />
                    </span>
                    <span>
                        Filter
                    </span>
                </span>
                {isOpen && (
                    <div className='flex flex-col gap-2'>
                        <PriceRange defaultValue={priceRangeValue} handleChange={handlePriceRangeChange} />
                        <SizeFilter sizes={sizes} onChange={updateSizes} />
                        <ColorFilter colors={colors} onChange={updateColors}/>
                        <Button marginTop='8' colorScheme='orange'>Filter</Button>
                    </div>
                )}
            </div>
            {isOpen && (
                <Backdrop blur={true} toggler={isOpen} handleClick={closeFilterPopover} />
            )}
        </>
    )
}

export default Filter