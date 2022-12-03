import { Checkbox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import Color from './Color'

function ColorFilter() {

    const { colors, updateColors } = useContext(FilterContext)

    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Select Colors:</label>
            <div className='flex flex-wrap gap-x-4 gap-y-2'>
                {colors.map((color,index) => (
                    <Checkbox
                    key={index}
                    onChange={e => updateColors(e, color.color_code)}
                    isChecked={color.isChecked}
                    size='lg' colorScheme='orange'>
                        <Color color={color}/>
                    </Checkbox>
                ))}
            </div>
        </div>
    )
}

export default ColorFilter