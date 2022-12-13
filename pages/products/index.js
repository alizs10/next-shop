import Head from 'next/head'
import React from 'react'
import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import FilterProvider from '../../components/Providers/FilterProvider'
import ProductsProvider from '../../components/Providers/ProductsProvider'
import ConnectionError from '../../components/ui/ConnectionError'
import { getProductsData } from '../api/products'

function ProductsPage(props) {
  return (
    <Master>
      <Head>
        <title>
          Nike's Shoes Shop - Products
        </title>
        <meta name="description" content="Nike's Shoes Shop - All Products" />
      </Head>
      {props.hasError ? (
        <ConnectionError />
      ) : (
        <ProductsProvider items={props.products}>
          <FilterProvider items={props.products}>
            <Products items={props.products} />
          </FilterProvider>
        </ProductsProvider>
      )}
    </Master>
  )
}

export async function getStaticProps() {

  let data = getProductsData()
  return {
    props: {
      products: data,
      hasError: false
    }
  }
}


export default ProductsPage;