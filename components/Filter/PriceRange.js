import React from 'react'
import { AccordionItem } from '@chakra-ui/react'
import PriceFilterItem from './PriceRangeItem'

function PriceRange({ priceLimit }) {

    return (
        <AccordionItem>
            {({isExpanded}) => (
                <PriceFilterItem priceLimit={priceLimit} isExpanded={isExpanded}/>
            )}
        </AccordionItem>
    )
}

export default PriceRange