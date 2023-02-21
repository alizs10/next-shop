import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ProductsContext from '../../context/ProductsContext'
import { paginateProducts, sliceProducts } from '../../helpers/products-helper'

function ProductsProvider(props) {

    const [isFilterActive, setIsFilterActive] = useState(false)
    const [loading, setIsLoading] = useState(true)

    const [pages, setPages] = useState(1)
    const [allProducts, setAllProducts] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [pageProducts, setPageProducts] = useState([])

    const router = useRouter()
    const { search } = router.query;

    useEffect(() => {
        setItems(props.items)
    }, [search])

    useEffect(() => {
        setItems(props.items)
    }, [pageNum])

    useEffect(() => {
        if (router.query.page && !isNaN(router.query.page) && parseInt(router.query.page) <= pages) {
            setPageNum(parseInt(router.query.page))
        }
    }, [router.query.page])

    const setItems = items => {
        const { paginatedProducts, pages, allProducts } = paginateProducts(items, pageNum, 9)

        setPageProducts(paginatedProducts)
        setPages(pages)
        setAllProducts(allProducts)
        setIsLoading(false)
    }


    return (
        <ProductsContext.Provider value={{
            isFilterActive, setIsFilterActive,
            pageProducts, setPageProducts,
            allProducts, setAllProducts,
            pages, setPages,
            pageNum, setPageNum,
            setItems,
            loading
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider