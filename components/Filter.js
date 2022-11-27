import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
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
                        <PriceRange />
                        <SizeFilter />
                        <ColorFilter />
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