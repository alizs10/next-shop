import {  AccordionItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import FilterContext from '../../context/FilterContext'
import SizeFilterItem from './SizeFilterItem'

function SizeFilter() {

    return (
        <AccordionItem>
            {({isExpanded}) => (
                <SizeFilterItem isExpanded={isExpanded}/>
            )}
        </AccordionItem>

    )
}

export default SizeFilter