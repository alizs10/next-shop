import { CheckIcon } from '@chakra-ui/icons'
import React from 'react'

function SelectedItem() {
    return (
        <div className='absolute top-0 left-0 w-full h-full bg-black/10 flex justify-center items-center'>
            <CheckIcon color="green.500"/>
        </div>
    )
}

export default SelectedItem