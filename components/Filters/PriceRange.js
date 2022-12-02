import React from 'react'
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'

function PriceRange({ handleChange, defaultValue, priceLimit }) {
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Price Range: <span className='text-sm'>{`($${defaultValue[0]} - $${defaultValue[1]})`}</span></label>
            <RangeSlider onChange={handleChange} colorScheme='orange' defaultValue={defaultValue} min={0} max={priceLimit} step={10}>
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