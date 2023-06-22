import React from 'react'
import Products from '../../components/Products'
import { searchThroughProducts } from '../../helpers/products-helper'
import { connectDatabase, getDocuments } from '../../util/database-util'
import ProductsProvider from '../../components/Providers/ProductsProvider'
import FilterProvider from '../../components/Providers/FilterProvider'
import Product from '../../database/Models/Product'

function SearchPage(props) {

  console.log(props);


  return (
      <ProductsProvider items={props.products}>
        <FilterProvider items={props.products}>
          <Products items={props.products} />
        </FilterProvider>
      </ProductsProvider>


  )
}

export async function getServerSideProps(ctx) {

  let searchedValue = ctx.query.search;
  await connectDatabase(process.env.DB_NAME)
  const products = await Product.find()

  let searchResults = searchThroughProducts(searchedValue, products)

  return {
    props: {
      products: searchResults
    }
  }
}

export default SearchPage