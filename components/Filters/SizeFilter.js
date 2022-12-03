import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function SizeFilter({sizes, onChange}) {
    
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Sizes:</label>
            <div className='flex flex-wrap gap-x-4 gap-y-2'>
                {sizes.map((size,index) => (
                    <Checkbox
                    onChange={e => onChange(e, size.size)}
                    isChecked={size.isChecked}
                    key={index} size='lg' colorScheme='orange'>
                        {size.size}
                    </Checkbox>
                ))}
            </div>
        </div>
    )
}

export default SizeFilter