import { CloseIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import FilterIcon from '../ui/icons/FilterIcon'
import Color from './Color'

import { AnimatePresence, motion } from 'framer-motion'

function ActiveFilters() {

    const { filters, handleRemoveFilter } = useContext(FilterContext)

    if (!filters.priceRange && !filters.sizes && !filters.colors) return

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
                {filters.priceRange && (
                    <span className='flex gap-x-2'>
                        <button
                            onClick={() => handleRemoveFilter("priceRange")}
                            className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                            <CloseIcon fontSize='xx-small' color='white' />
                        </button>
                        <span>Price Range: (${filters.priceRange[0]} - ${filters.priceRange[1]})</span>
                    </span>
                )}
                {filters.colors && (

                    <span className='flex gap-x-2 items-center'>
                        <button
                            onClick={() => handleRemoveFilter("colors")}
                            className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                            <CloseIcon fontSize='xx-small' color='white' />
                        </button>
                        <span>Colors:</span>
                        <span className='flex gap-x-1'>
                            {filters.colors.map(color => <Color color={{ color_code: color }} />)}
                        </span>
                    </span>
                )}
                {filters.sizes && (

                    <span className='flex gap-x-2'>
                        <button
                            onClick={() => handleRemoveFilter("sizes")}
                            className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                            <CloseIcon fontSize='xx-small' color='white' />
                        </button>
                        <span>Sizes:</span>
                        <span className='flex gap-x-1'>
                            {filters.sizes.map(size => <span>{size}</span>)}
                        </span>
                    </span>
                )}

            </motion.div>
        </AnimatePresence>
    )
}

export default ActiveFilters