import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function SizeFilter() {
    let fakeData = [
        '3',
        '4',
        '5',
        '6',
        '7.1',
        '7.1',
        '7.1',
        '7.1',
        '7.1',
    ]
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Sizes:</label>
            <div className='flex flex-wrap gap-x-4 gap-y-2'>
                {fakeData.map(size => (
                    <Checkbox size='lg' colorScheme='orange'>
                        {size}
                    </Checkbox>
                ))}
            </div>
        </div>
    )
}

export default SizeFilter