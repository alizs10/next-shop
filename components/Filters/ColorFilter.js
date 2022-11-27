import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function ColorFilter({colors, onChange}) {
    
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Colors:</label>
            <div className='flex flex-wrap gap-x-4 gap-y-2'>
                {colors.map(color => (
                    <Checkbox
                    onChange={e => onChange(e, color.id)}
                    size='lg' colorScheme='orange'>
                        {color.name}
                    </Checkbox>
                ))}
            </div>
        </div>
    )
}

export default ColorFilter