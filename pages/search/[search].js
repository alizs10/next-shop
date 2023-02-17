import React from 'react'

import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import { searchThroughProducts } from '../../helpers/products-helper'
import { connectDatabase, getDocuments } from '../../util/database-util'
import ProductsProvider from '../../components/Providers/ProductsProvider'
import FilterProvider from '../../components/Providers/FilterProvider'

function SearchPage(props) {

  console.log(props);


  return (
    <Master>
      <ProductsProvider items={props.products}>
        <FilterProvider items={props.products}>
          <Products items={props.products} />
        </FilterProvider>
      </ProductsProvider>
    </Master>

  )
}

export async function getServerSideProps(ctx) {

  console.log("We are here");

  let searchedValue = ctx.query.search
  let client = await connectDatabase(process.env.DB_NAME)
  let products = await getDocuments(client, 'products')
  let searchResults = searchThroughProducts(searchedValue, products)
  client.close()
  console.log(products, searchResults);

  return {
    props: {
      products: searchResults
    }
  }
}

export default SearchPage