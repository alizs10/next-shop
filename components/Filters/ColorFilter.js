import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function ColorFilter({colors, onChange}) {
    
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Colors:</label>
            <div className='flex flex-wrap gap-x-4 gap-y-2'>
                {colors.map((color,index) => (
                    <Checkbox
                    key={index}
                    onChange={e => onChange(e, color.color_code)}
                    size='lg' colorScheme='orange'>
                        <div style={{backgroundColor: color.color_code}} className='shadow-md w-4 h-4 rounded-full'></div>
                    </Checkbox>
                ))}
            </div>
        </div>
    )
}

export default ColorFilter