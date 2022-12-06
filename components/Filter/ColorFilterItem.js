import { AccordionButton, AccordionIcon, AccordionPanel, Box, Checkbox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import Color from './Color'

function ColorFilterItem() {

    const { colors, updateColors } = useContext(FilterContext)

    return (
        <>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <label className='text-md'>Select Colors:</label>
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
                <div className='flex flex-wrap gap-x-4 gap-y-2'>
                    {colors.map((color, index) => (
                        <Checkbox
                            key={index}
                            onChange={e => updateColors(e, color.color_code)}
                            isChecked={color.isChecked}
                            size='lg' colorScheme='orange'>
                            <Color color={color} />
                        </Checkbox>
                    ))}
                </div>
            </AccordionPanel>
        </>
    )
}

export default ColorFilterItem