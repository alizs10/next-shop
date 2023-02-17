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
  const { onScreenItems, loading } = useContext(ProductsContext)

  const onSearch = (searchedValue) => {

    if (!searchedValue) return

    let url = `/search/${searchedValue}`
    router.push(url)
  }

  if (loading) return


  return (
    <>
      <div className='relative w-full px-44 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>

        <ActiveFilters />

        {onScreenItems[0].length > 0 ? (
          <>
            <div className='gap-8 grid grid-cols-4'>

              {onScreenItems[0].map(product => (
                <Product key={product._id} product={product} />
              ))}

            </div>
            <div className='gap-8 grid grid-cols-5'>

              {onScreenItems[1].map(product => (
                <Product key={product._id} product={product} />
              ))}

            </div>
          </>
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