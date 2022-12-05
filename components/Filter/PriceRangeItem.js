import { AccordionButton, AccordionIcon, AccordionPanel, Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import FilterContext from '../../context/FilterContext'

function PriceRangeItem({ isExpanded, priceLimit }) {

    const { isPriceRangeFilterActive, setIsPriceRangeFilterActive, handlePriceRangeChange, priceRangeValue } = useContext(FilterContext)

    useEffect(() => {
        if (isPriceRangeFilterActive === isExpanded) return
        setIsPriceRangeFilterActive(isExpanded)
    }, [isExpanded])

    return (
        <>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <label className='text-md'>Price Range:
                        {isPriceRangeFilterActive && (
                            <span className='text-sm'>{`($${priceRangeValue[0]} - $${priceRangeValue[1]})`}</span>
                        )}
                    </label>
                </Box>
                <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pt={4}>

                <RangeSlider onChange={handlePriceRangeChange} colorScheme='orange' defaultValue={priceRangeValue} min={0} max={priceLimit} step={10}>
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>

            </AccordionPanel>
        </>
    )
}

export default PriceRangeItem