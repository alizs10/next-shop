import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import React from 'react'

function Pagination() {
    return (
        <section className='px-20 mt-14 w-full flex justify-end items-center'>

            <div className='p-3 flex gap-2 items-center'>
                {/* <button className='text-xs'>
                    Prev
                </button> */}
                <button className='mx-1 text-xs relative px-2'>
                    <span>1</span>
                    <span className='absolute -bottom-2 left-0 right-0 h-1 bg-orange-200'></span>
                </button>
                <button className='mx-3 text-xs'>
                    2
                </button>
                <button className='mx-3 text-xs'>
                    3
                </button>
                <span className='mx-3 text-xs'>
                    ...
                </span>
                <button className='mx-3 text-xs'>
                    10
                </button>
                <button className='text-xs'>
                    Next
                </button>
            </div>

        </section>
    )
}

export default Pagination