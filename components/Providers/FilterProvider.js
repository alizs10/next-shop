import React, { useContext, useState } from 'react'
import FilterContext from '../../context/FilterContext'
import ProductsContext from '../../context/ProductsContext'
import { filterProducts, getCheckedColors, getCheckedSizes } from '../../herlpers/filter-helper'

function FilterProvider(props) {

    const { setItems } = useContext(ProductsContext)
    const [filters, setFilters] = useState({
        priceRange: null,
        colors: null,
        sizes: null
    })

    const [isOpen, setIsOpen] = useState(false)
    const openFilterPopover = () => {
        if (isOpen) return
        setIsOpen(true)
    }
    const closeFilterPopover = () => {
        setIsOpen(false)
    }

    // price range
    const [priceRangeEffect, setPriceRangeEffect] = useState(false)
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

    const uncheckAllSizes = () => {
        let sizesInstance = [...sizes]
        sizesInstance.map(size => {
            size.isChecked = false;
        })
        setSizes(sizesInstance)
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

    const uncheckAllColors = () => {
        let colorsInstance = [...colors]
        colorsInstance.map(color => {
            color.isChecked = false;
        })
        setColors(colorsInstance)
    }


    const handleFilter = (filtersSchema = null) => {

        if (filtersSchema === null) {
            let checkedSizes = getCheckedSizes(sizes)
            let checkedColors = getCheckedColors(colors)

            filtersSchema = {}
            if(priceRangeEffect)
            {
                filtersSchema.priceRange = priceRangeValue;
            } else {
                filtersSchema.priceRange = null;
            }
            if (checkedSizes.length > 0) {
                filtersSchema.sizes = checkedSizes;
            } else {
                filtersSchema.sizes = null
            }

            if (checkedColors.length > 0) {
                filtersSchema.colors = checkedColors;
            } else {
                filtersSchema.colors = null
            }

        }

        let filteredProducts = filterProducts(props.items, filtersSchema)

        setFilters(filtersSchema)
        setItems(filteredProducts)
        setIsOpen(false)
    }

    const handleRemoveFilter = (filterKey) => {

        let filtersSchema = { ...filters }

        switch (filterKey) {
            case "priceRange":
                filtersSchema.priceRange = null;
                break;
            case "sizes":
                filtersSchema.sizes = null;
                break;
            case "colors":
                filtersSchema.colors = null;
                break;
        }

        console.log(filtersSchema);
        handleFilter(filtersSchema)

    }

    return (
        <FilterContext.Provider value={{
            isOpen, setIsOpen,
            openFilterPopover,
            closeFilterPopover,
            priceRangeEffect, setPriceRangeEffect,
            priceRangeValue, setPriceRangeValue,
            handlePriceRangeChange,
            sizes, setSizes,
            updateSizes,
            colors, setColors,
            updateColors,
            uncheckAllColors,
            uncheckAllSizes,
            handleFilter,
            handleRemoveFilter,
            filters
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterProvider