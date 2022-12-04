import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ProductsContext from '../../context/ProductsContext'
import { paginateProducts, sliceProducts } from '../../herlpers/products-helper'

function ProductsProvider(props) {

    const [isFilterActive, setIsFilterActive] = useState(false)
    const [onScreenItems, setOnScreenItems] = useState([[], []])
    const [pages, setPages] = useState(1)
    const [allProducts, setAllProducts] = useState(0)
    const [pageNum, setPageNum] = useState(1)

    const router = useRouter()

    useEffect(() => {
        setItems(props.items)
    }, [])

    useEffect(() => {
        setItems(props.items)
    }, [pageNum])

    useEffect(() => {
        if (router.query.page && !isNaN(router.query.page) && parseInt(router.query.page) <= pages) {
            setPageNum(parseInt(router.query.page))
        }
    }, [router.query.page])

    const setItems = items => {
        const { paginatedProducts, pages, allProducts } = paginateProducts(items, pageNum, 11)
        const slicedProducts = sliceProducts(paginatedProducts, 5)
        setOnScreenItems(slicedProducts)
        setPages(pages)
        setAllProducts(allProducts)
    }


    return (
        <ProductsContext.Provider value={{
            isFilterActive, setIsFilterActive,
            onScreenItems, setOnScreenItems,
            allProducts, setAllProducts,
            pages, setPages,
            pageNum, setPageNum,
            setItems
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider