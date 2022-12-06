import { AccordionButton, AccordionIcon, AccordionPanel, Box, Checkbox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'

function SizeFilterItem() {

    const { sizes, updateSizes } = useContext(FilterContext)

    return (
        <>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <label className='text-md'>Select Sizes:</label>
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
                <div className='flex flex-wrap gap-x-4 gap-y-2'>
                    {sizes.map((size, index) => (
                        <Checkbox
                            onChange={e => updateSizes(e, size.size)}
                            isChecked={size.isChecked}
                            key={index} size='lg' colorScheme='orange'>
                            {size.size}
                        </Checkbox>
                    ))}
                </div>
            </AccordionPanel>
        </>
    )
}

export default SizeFilterItem