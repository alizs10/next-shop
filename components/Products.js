import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { paginateProducts, sliceProducts } from '../herlpers/products-helper'
import Product from './Product'
import Search from './Search'
import Pagination from './Pagination/Pagination'
import MessageAlert from '../components/ui/MessageAlert'

function Products(props) {

  const router = useRouter()
  const [pageNum, setPageNum] = useState(1)
  const { paginatedProducts, pages, allProducts } = paginateProducts(props.items, pageNum, 11)
  const slicedProducts = sliceProducts(paginatedProducts, 5)

  useEffect(() => {
    if (router.query.page && !isNaN(router.query.page) && parseInt(router.query.page) <= pages) {
      setPageNum(parseInt(router.query.page))
    }
  }, [router.query.page])

  const onSearch = (searchedValue) => {
    if (!searchedValue) return
    let url = `/search/${searchedValue}`
    router.push(url)
  }

  return (
    <>
      <div className='relative w-full px-44 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>

        {props.items.length > 0 ? (
          <>
            <div className='gap-8 grid grid-cols-5'>

              {slicedProducts[0].map(product => (
                <Product key={product.id} product={product} />
              ))}

            </div>
            <div className='gap-8 grid grid-cols-6'>

              {slicedProducts[1].map(product => (
                <Product key={product.id} product={product} />
              ))}

            </div>
          </>
        ) : (
          <MessageAlert title="No Results" body="could'nt find any products" />
        )}
        <Search onSearch={onSearch} />
        {props.items.length > 0 && (
          <Filter />
        )}
      </div>
      {pages > 1 && (
        <Pagination allProducts={allProducts} pages={pages} currentPage={pageNum} setPageNum={setPageNum} />
      )}
    </>
  )
}

export default Products