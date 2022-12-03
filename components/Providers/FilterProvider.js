import React, { useState } from 'react'
import FilterContext from '../../context/FilterContext'

function FilterProvider(props) {

    const [isFilterActive, setIsFilterActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const openFilterPopover = () => {
        if (isOpen) return
        setIsOpen(true)
    }
    const closeFilterPopover = () => {
        setIsOpen(false)
    }

    // price range
    const [priceRangeValue, setPriceRangeValue] = useState([0, 0])

    const handlePriceRangeChange = value => {
        setPriceRangeValue(value)
    }

    // size filter
    const [sizes, setSizes] = useState([])

    const updateSizes = (e, sizeValue) => {
        let sizesInstance = [...sizes]
        let updatableSizeIndex = sizesInstance.findIndex(size => size.size == sizeValue)
        let updatableSize = sizesInstance[updatableSizeIndex]
        updatableSize.isChecked = e.target.checked;
        setSizes([...sizesInstance])
    }

    // color filter
    const [colors, setColors] = useState([])

    const updateColors = (e, colorCode) => {
        let colorsInstance = [...colors]
        let updatableColorIndex = colorsInstance.findIndex(color => color.color_code == colorCode)
        let updatableColor = colorsInstance[updatableColorIndex]
        updatableColor.isChecked = e.target.checked;
        setColors(colorsInstance)

    }



    return (
        <FilterContext.Provider value={{
            isFilterActive, setIsFilterActive,
            isOpen, setIsOpen,
            openFilterPopover,
            closeFilterPopover,
            priceRangeValue, setPriceRangeValue,
            handlePriceRangeChange,
            sizes, setSizes,
            updateSizes,
            colors, setColors,
            updateColors
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterProvider