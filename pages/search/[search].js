import React, { useEffect, useState } from 'react'
import { default as ProductComp } from '../../components/App/Product'
import { searchThroughProducts } from '../../helpers/products-helper'
import { connectDatabase } from '../../util/database-util'
import Product from '../../database/Models/Product'
import Favorite from '../../database/Models/Favorite'
import { jsonParser } from '../../helpers/helpers';
import FilterIcon from '../../components/ui/icons/FilterIcon'
import useAppStore from '../../stores/app-store'
import AddToCartPopup from '../../components/App/Main/AddToCartPopup';
import { CartContextProvider } from '../../context/CartContext'
import XIcon from '../../components/ui/icons/XIcon'
import useProductStore from '../../stores/product-store'
import useAuth from '../../hooks/useAuth';
import FiltersPopup from '../../components/App/FiltersPopup'
import { AnimatePresence } from 'framer-motion'

function SearchPage({ products: initialProducts, searchedValue }) {

  const [filterPopupVis, setFilterPopupVis] = useState(false)

  const { mainAddToCartPopupVis } = useAppStore()
  const { products, setProducts } = useProductStore()


  useEffect(() => {

    setProducts(initialProducts)

  }, [initialProducts])

  function toggleFilterPopup() {
    setFilterPopupVis(prevState => !prevState)
  }

  return (
    <CartContextProvider>

      <section className='px-20 py-10 mt-10 flex flex-col gap-y-8'>

        <div className='flex justify-between items-start'>
          <div className='flex flex-col text-white gap-y-1'>
            <h3 className='text-2xl'>Here's results for "{searchedValue}"</h3>
            <span className='text-lg text-red-500'>{products.length} item{products.length > 1 ? 's' : ''} found</span>
          </div>
          <div className='relative'>

            <AnimatePresence>
              {filterPopupVis ? (
                <FiltersPopup key={0} toggleFilterPopup={toggleFilterPopup} />
              ) : (
                <button key={1} onClick={toggleFilterPopup} className='p-3 rounded-xl bg-red-600 hover:rotate-[360deg] transition-all duration-300 text-white shadow-lg'>
                  <div className='scale-125'>
                    <FilterIcon />
                  </div>
                </button>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 w-full flex gap-x-12 items-center">
          {products.map(product => <ProductComp key={product._id} product={product} />)}
        </div>

        {mainAddToCartPopupVis && (
          <AddToCartPopup />
        )}

      </section>
    </CartContextProvider>
  )
}

export async function getServerSideProps({ req, query }) {

  let searchedValue = query.search;
  await connectDatabase(process.env.DB_NAME)

  let user = await useAuth(req)

  let products = await Product.find().populate('attributes.sizes.sizeId').exec()
  products = jsonParser(products);

  if (user) {

    let favorites = await Favorite.find({ user: user._id })
    favorites = jsonParser(favorites)

    let userFavoritesIds = favorites.map(fav => fav.product)

    products = products.map(product => {
      let isFavorite = false
      if (userFavoritesIds.includes(product._id)) {
        isFavorite = true;
      }
      return { ...product, isFavorite }
    })
  }

  let searchResults = searchThroughProducts(searchedValue, products)

  return {
    props: {
      products: searchResults,
      searchedValue,
      layoutType: "app",
      user
    }
  }
}

export default SearchPage;