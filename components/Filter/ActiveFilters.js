import { CloseIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import FilterIcon from '../ui/icons/FilterIcon'
import Color from './Color'

import { AnimatePresence, motion } from 'framer-motion'

function ActiveFilters() {

    const { sizes, colors, priceRangeValue } = useContext(FilterContext)

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
                <span className='flex gap-x-2'>
                    <button className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                        <CloseIcon fontSize='xx-small' color='white' />
                    </button>
                    <span>Price Range: ($100 - $120)</span>
                </span>
                <span className='flex gap-x-2 items-center'>
                    <button className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                        <CloseIcon fontSize='xx-small' color='white' />
                    </button>
                    <span>Colors:</span>
                    <span className='flex gap-x-1'>
                        <Color color={{ color_code: "#000" }} />
                        <Color color={{ color_code: "#000" }} />
                        <Color color={{ color_code: "#000" }} />
                    </span>
                </span>
                <span className='flex gap-x-2'>
                    <button className='flex justify-center items-center w-5 h-5 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300'>
                        <CloseIcon fontSize='xx-small' color='white' />
                    </button>
                    <span>Sizes:</span>
                    <span className='flex gap-x-1'>
                        <span>M 7 / W 8.5</span>
                    </span>
                </span>

            </motion.div>
        </AnimatePresence>
    )
}

export default ActiveFilters