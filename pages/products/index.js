import React from 'react'
import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import FilterProvider from '../../components/Providers/FilterProvider'
import ConnectionError from '../../components/ui/ConnectionError'
import { getAllProducts } from '../../herlpers/requests'

function ProductsPage(props) {
  return (
    <Master>
      {props.hasError ? (
        <ConnectionError />
      ) : (
        <FilterProvider>
          <Products items={props.products} />
        </FilterProvider>
      )}
    </Master>
  )
}

export async function getStaticProps() {

  try {
    let allProducts = await getAllProducts()

    return {
      props: {
        products: allProducts
      },
      revalidate: 60
    }
  } catch (error) {
    return {
      props: {
        products: [],
        hasError: true
      }
    }
  }

}


export default ProductsPage;