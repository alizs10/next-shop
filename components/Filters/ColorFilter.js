import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function ColorFilter() {
    let fakeData = [
        'red',
        'blue',
        'orange',
        'white',
        'black'
    ]
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Colors:</label>
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

export default ColorFilter