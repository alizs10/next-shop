import React, { useContext } from 'react'
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import FilterContext from '../../context/FilterContext'

function PriceRange({ priceLimit }) {

    const { handlePriceRangeChange, priceRangeValue } = useContext(FilterContext)
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Price Range: <span className='text-sm'>{`($${priceRangeValue[0]} - $${priceRangeValue[1]})`}</span></label>
            <RangeSlider onChange={handlePriceRangeChange} colorScheme='orange' defaultValue={priceRangeValue} min={0} max={priceLimit} step={10}>
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>
        </div>
    )
}

export default PriceRange