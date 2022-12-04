import React, { useContext, useState } from 'react'
import FilterContext from '../../context/FilterContext'
import ProductsContext from '../../context/ProductsContext'
import { getCheckedColors, getCheckedSizes } from '../../herlpers/filter-helper'

function FilterProvider(props) {

    const { setItems } = useContext(ProductsContext)
    const { setIsFilterActive } = useContext(ProductsContext)
    const [isOpen, setIsOpen] = useState(false)
    const openFilterPopover = () => {
        if (isOpen) return
        setIsOpen(true)
    }
    const closeFilterPopover = () => {
        setIsOpen(false)
    }

    // price range
    const [priceRangeFilter, setPriceRangeFilter] = useState(false)
    const [priceRangeValue, setPriceRangeValue] = useState([0, 0])

    const handlePriceRangeChange = value => {
        setPriceRangeValue(value)
    }

    const resetPriceRange = () => {
        
        handleFilter()
        setPriceRangeFilter(false)
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


    const handleFilter = () => {
        let checkedSizes = getCheckedSizes(sizes)
        let checkedColors = getCheckedColors(colors)

        let filteredProducts = props.items.filter(product => {

            // filter price
            if (product.price < priceRangeValue[0] || product.price > priceRangeValue[1]) {
                return false
            }

            // filter size
            if (checkedSizes.length > 0) {
                let productSizes = []
                for (const key in product.sizes) {
                    productSizes.push(product.sizes[key].size)
                }

                let isExists = false;
                productSizes.every(productSize => {
                    if (checkedSizes.includes(productSize)) {
                        isExists = true
                    }
                    return !isExists;
                })

                if (!isExists) return false;
            }
            // filter color
            if (checkedColors.length > 0) {
                let productColors = []
                for (const key in product.colors) {
                    productColors.push(product.colors[key].color_code)
                }

                let isExists = false;
                productColors.every(productColor => {
                    console.log(checkedColors, productColor);
                    if (checkedColors.includes(productColor)) {
                        isExists = true
                    }
                    return !isExists;
                })

                if (!isExists) return false;
            }

            return true;
        })

        setItems(filteredProducts)
        setIsOpen(false)
        setPriceRangeFilter(true)
        setIsFilterActive(true)
    }


    return (
        <FilterContext.Provider value={{
            isOpen, setIsOpen,
            openFilterPopover,
            closeFilterPopover,
            priceRangeFilter, setPriceRangeFilter,
            priceRangeValue, setPriceRangeValue,
            handlePriceRangeChange,
            sizes, setSizes,
            updateSizes,
            colors, setColors,
            updateColors,
            uncheckAllColors,
            uncheckAllSizes,
            handleFilter,
            resetPriceRange
        }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterProvider