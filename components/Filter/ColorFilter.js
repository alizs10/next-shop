import { AccordionItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import ColorFilterItem from './ColorFilterItem'

function ColorFilter() {

    return (
        <AccordionItem>
            {({isExpanded}) => (
                <ColorFilterItem isExpanded={isExpanded}/>
            )}
        </AccordionItem>

    )
}

export default ColorFilter