import { CloseIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import FilterIcon from '../ui/icons/FilterIcon'
import Color from './Color'

import { AnimatePresence, motion } from 'framer-motion'
import { getCheckedColors, getCheckedSizes } from '../../herlpers/filter-helper'
import ProductsContext from '../../context/ProductsContext'

function ActiveFilters() {

    const { sizes, colors, priceRangeValue, uncheckAllSizes, uncheckAllColors, priceRangeFilter, resetPriceRange } = useContext(FilterContext)
    const { isFilterActive } = useContext(ProductsContext)

    let checkedSizes = getCheckedSizes(sizes)
    let checkedColors = getCheckedColors(colors)


    if (!isFilterActive || (!priceRangeFilter && checkedColors.length == 0 && checkedSizes.length == 0)) return

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex items-center justify-between bg-orange-200 px-5 py-2 rounded-3xl'>
                <span className='flex gap-x-2'>
                    <span>
                        <FilterIcon />
                    </span>
                    <span>Active Filters:</span>
                </span>
                {priceRangeFilter && (
                    <span className='flex gap-x-2'>
                        <button
                            onClick={resetPriceRange}
                            className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                            <CloseIcon fontSize='xx-small' color='white' />
                        </button>
                        <span>Price Range: (${priceRangeValue[0]} - ${priceRangeValue[1]})</span>
                    </span>
                )}
                {checkedColors.length > 0 && (

                    <span className='flex gap-x-2 items-center'>
                        <button
                            onClick={uncheckAllColors}
                            className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                            <CloseIcon fontSize='xx-small' color='white' />
                        </button>
                        <span>Colors:</span>
                        <span className='flex gap-x-1'>
                            {checkedColors.map(color => <Color color={{ color_code: color }} />)}
                        </span>
                    </span>
                )}
                {checkedSizes.length > 0 && (

                    <span className='flex gap-x-2'>
                        <button
                            onClick={uncheckAllSizes}
                            className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                            <CloseIcon fontSize='xx-small' color='white' />
                        </button>
                        <span>Sizes:</span>
                        <span className='flex gap-x-1'>
                            {checkedSizes.map(size => <span>{size}</span>)}
                        </span>
                    </span>
                )}

            </motion.div>
        </AnimatePresence>
    )
}

export default ActiveFilters