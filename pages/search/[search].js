import React, { useState } from 'react'
import { default as ProductComp } from '../../components/App/Product'
import { searchThroughProducts } from '../../helpers/products-helper'
import { connectDatabase } from '../../util/database-util'
import ProductsProvider from '../../components/Providers/ProductsProvider'
import FilterProvider from '../../components/Providers/FilterProvider'
import Product from '../../database/Models/Product'
import { jsonParser } from '../../helpers/helpers';
import FilterIcon from '../../components/ui/icons/FilterIcon'
import useAppStore from '../../stores/app-store'
import AddToCartPopup from '../../components/App/Main/AddToCartPopup';
import { CartContextProvider } from '../../context/CartContext'
import XIcon from '../../components/ui/icons/XIcon'

function SearchPage({ products, searchedValue }) {

  const { mainAddToCartPopupVis } = useAppStore()

  const [filterPopupVis, setFilterPopupVis] = useState(false)

  function toggleFilterPopup() {
    setFilterPopupVis(prevState => !prevState)
  }

  return (

    <section className='px-20 py-10 mt-10 flex flex-col gap-y-8'>

      <div className='flex justify-between items-start'>
        <div className='flex flex-col text-white gap-y-1'>
          <h3 className='text-2xl'>Here's results for "{searchedValue}"</h3>
          <span className='text-lg text-red-500'>{products.length} item{products.length > 1 ? 's' : ''} found</span>
        </div>
        <div className='relative'>

          {filterPopupVis ? (
            <div className='absolute top-0 right-0 p-5 w-[25rem] z-30 shadow-lg aspect-square rounded-3xl bg-red-600'>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-white">Filters</span>
                <span onClick={toggleFilterPopup} className='hover:bg-red-500 transition-all duration-300 p-1 rounded-md cursor-pointer text-white scale-125'>
                  <XIcon />
                </span>
              </div>
            </div>
          ) : (
            <button onClick={toggleFilterPopup} className='p-3 rounded-xl bg-red-600 hover:rotate-[360deg] transition-all duration-300 text-white shadow-lg'>
              <div className='scale-125'>
                <FilterIcon />
              </div>
            </button>

          )}
        </div>
      </div>

      <div className="mt-10 w-full flex gap-x-12 items-center">
        {products.map(product => <ProductComp key={product._id} product={product} />)}
      </div>

      {mainAddToCartPopupVis && (
        <CartContextProvider>
          <AddToCartPopup />
        </CartContextProvider>
      )}

    </section>
  )
}

export async function getServerSideProps(ctx) {

  let searchedValue = ctx.query.search;
  await connectDatabase(process.env.DB_NAME)
  let products = await Product.find().populate('attributes.sizes.sizeId').exec()
  products = jsonParser(products);

  let searchResults = searchThroughProducts(searchedValue, products)

  return {
    props: {
      products: searchResults,
      searchedValue,
      layoutType: "app"
    }
  }
}

export default SearchPage