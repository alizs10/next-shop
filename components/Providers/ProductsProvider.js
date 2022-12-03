import React, { useEffect, useState } from 'react'
import ProductsContext from '../../context/ProductsContext'

function ProductsProvider(props) {
    
    
    return (
        <ProductsContext.Provider value={{
            handleDisplayFilterRes, showFilterRes
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider