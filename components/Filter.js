import React from 'react'
import FilterIcon from './ui/icons/FilterIcon'

function Filter() {
    return (
        <div className='absolute flex justify-center items-center top-1/2 left-0 w-[6vmin] h-[17vmin] bg-orange-200 rounded-r-3xl
        shadow-md cursor-pointer hover:left-2 transition-all duration-300'>
            <span className='-rotate-90 text-md flex gap-x-2'>
                <span>
                    <FilterIcon />
                </span>
                <span>
                    Filter
                </span>
            </span>
        </div>
    )
}

export default Filter