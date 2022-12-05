import { CloseIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import FilterContext from '../context/FilterContext'
import { getAllColors, getAllSizes, getCheckedColors, getCheckedSizes, getPriceLimit } from '../herlpers/filter-helper'
import ColorFilter from './Filter/ColorFilter'
import PriceRange from './Filter/PriceRange'
import SizeFilter from './Filter/SizeFilter'
import Backdrop from './ui/Backdrop'
import FilterIcon from './ui/icons/FilterIcon'

function Filter({ products, setItems }) {

    const { setPriceRangeValue, setSizes, setColors, isOpen, openFilterPopover, closeFilterPopover, handleFilter } = useContext(FilterContext)

    useEffect(() => {
        if (products.length == 0) return
        
        setPriceRangeValue([0, getPriceLimit(products) / 2])
        setSizes(getAllSizes(products))
        setColors(getAllColors(products))

    }, [])



    return (
        <>
            <div
                onClick={openFilterPopover}
                className={`absolute flex ${isOpen ? 'top-1/4 left-1/3 w-1/3 h-fit rounded-3xl flex-col gap-y-2 px-5 py-3 bg-gray-100 z-[60]' : 'cursor-pointer z-40 hover:translate-x-2 top-1/2 justify-center items-center left-0 w-[6vmin] h-[17vmin] rounded-r-3xl bg-orange-200'}
        shadow-md transition-all duration-300`}>
                <span className={`${isOpen ? 'text-xl mb-2 justify-between items-center' : '-rotate-90 text-md'} flex gap-x-2`}>
                    <span className='flex gap-x-2'>
                        <span>
                            <FilterIcon />
                        </span>
                        <span>
                            Filter
                        </span>
                    </span>
                    {isOpen && (

                        <button
                            onClick={closeFilterPopover}
                            className='rounded-full hover:bg-slate-200 transition-all duration-300 p-3 flex justify-center items-center'>
                            <CloseIcon fontSize='small' />
                        </button>
                    )}
                </span>
                {isOpen && (
                    <div className='flex flex-col gap-2'>
                        <PriceRange priceLimit={getPriceLimit(products)} />
                        <SizeFilter />
                        <ColorFilter />
                        <Button
                            onClick={() => handleFilter()}
                            marginTop='8' colorScheme='orange'>Filter</Button>
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