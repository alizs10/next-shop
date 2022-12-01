import { useRouter } from 'next/router'
import React from 'react'
import Filter from './Filter'
import { paginateProducts, sliceProducts } from './herlpers/products-helper'
import Product from './Product'
import Search from './Search'
import Pagination from './Pagination/Pagination'

function Products(props) {

  const router = useRouter()
  const onSearch = (searchedValue) => {
    if (!searchedValue) return
    let url = `/search/${searchedValue}`
    router.push(url)
  }

  const { paginatedProducts, pages, allProducts } = paginateProducts(props.items, 1, 11)
  const slicedProducts = sliceProducts(paginatedProducts, 5)

  return (
    <>
      <div className='relative w-full px-44 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>

        <div className='gap-8 grid grid-cols-5'>

          {slicedProducts[0].map(product => (
            <Product product={product} />
          ))}

        </div>
        <div className='gap-8 grid grid-cols-6'>

          {slicedProducts[1].map(product => (
            <Product product={product} />
          ))}

        </div>

        <Search onSearch={onSearch} />
        <Filter />
      </div>
      <Pagination allProducts={allProducts} pages={pages} currentPage={1}/>
    </>
  )
}

export default Products