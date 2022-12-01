import React from 'react'

import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import { getAllProducts } from '../../herlpers/requests'
import { searchThroughProducts } from '../../herlpers/products-helper'

function SearchPage(props) {

  return (
    <Master>
        <Products items={props.products}/>
    </Master>
    
  )
}

export async function getServerSideProps(ctx) {
  
  let searchedValue = ctx.query.search
  let allProducts = await getAllProducts()
  let searchResults = searchThroughProducts(searchedValue, allProducts)
  
  return {
    props: {
      products: searchResults
    }
  }
}

export default SearchPage