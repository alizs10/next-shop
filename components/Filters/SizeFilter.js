import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function SizeFilter({sizes, onChange}) {
    
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Sizes:</label>
            <div className='flex flex-wrap gap-x-4 gap-y-2'>
                {sizes.map(size => (
                    <Checkbox
                    onChange={e => onChange(e, size.id)}
                    key={size.id} size='lg' colorScheme='orange'>
                        {size.size}
                    </Checkbox>
                ))}
            </div>
        </div>
    )
}

export default SizeFilter