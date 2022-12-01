import { Link } from '@chakra-ui/react'
import React from 'react'

function Page(props) {
    return (
            <button
            onClick={() => props.setPageNum(props.pageNum)}
            className='mx-1 text-xs relative px-2'>
                <span>{props.pageNum}</span>
                {props.isActive && (
                    <span className='absolute -bottom-2 left-0 right-0 h-1 bg-orange-200'></span>
                )}
            </button>
    )
}

export default Page