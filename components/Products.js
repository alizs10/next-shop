import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Filter from './Filter'
import Product from './Product'
import Search from './Search'
import Pagination from './Pagination/Pagination'
import MessageAlert from '../components/ui/MessageAlert'
import ActiveFilters from './Filter/ActiveFilters'
import ProductsContext from '../context/ProductsContext'

function Products(props) {

  const router = useRouter()
  const { pageProducts, loading } = useContext(ProductsContext)

  const onSearch = (searchedValue) => {

    if (!searchedValue) return

    let url = `/search/${searchedValue}`
    router.push(url)
  }

  if (loading) return


  return (
    <>
      <div className='relative w-full px-10 sm:px-14 md:px-16 lg:px-20 xl:px-28 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>

        <ActiveFilters />

        {pageProducts.length > 0 ? (
          <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>

            {pageProducts.map(product => (
              <Product key={product._id} product={product} />
            ))}

          </div>

        ) : (
          <MessageAlert title="No Results" body="could'nt find any products" />
        )}
        <Search onSearch={onSearch} />
        {props.items.length > 0 && (
          <Filter products={props.items} />
        )}
      </div>

      <Pagination />

    </>
  )
}

export default Products