import { useState } from "react"
import ProductContext from "../../context/ProductContext"
import { calculateFinalPrice } from "../../herlpers/product-helper"

function ProductProvider(props) {

    const [selectedColor, setSelectedColor] = useState(0)
    const [selectedSize, setSelectedSize] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)


    const handleUpdatePrice = (product) => {
        let calculatedFinalPrice = calculateFinalPrice(product, selectedColor, selectedSize)
        setFinalPrice(calculatedFinalPrice)
    }

    const handleSelectColor = (index) => {
        setSelectedColor(index)
    }

    const handleSelectSize = (index) => {
        setSelectedSize(index)
    }

    const handleInitialPrice = product => {
        setFinalPrice(calculateFinalPrice(product, 0, 0))
    }

    const values = {
        handleInitialPrice,
        handleSelectColor,
        handleSelectSize,
        handleUpdatePrice,
        finalPrice,
        selectedColor,
        selectedSize
    }


    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider