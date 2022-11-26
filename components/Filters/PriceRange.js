import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import React from 'react'

function PriceRange() {
    return (
        <div className='flex flex-col gap-y-2'>
            <label className='text-md'>Price Range:</label>
            <RangeSlider colorScheme='orange' aria-label={['min', 'max']} defaultValue={[10, 30]}>
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