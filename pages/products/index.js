import Head from 'next/head'
import React from 'react'
import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import FilterProvider from '../../components/Providers/FilterProvider'
import ProductsProvider from '../../components/Providers/ProductsProvider'
import ConnectionError from '../../components/ui/ConnectionError'
import Product from '../../database/Models/Product'
import { closeConnection, connectDatabase, getDocuments } from '../../util/database-util'


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

  await connectDatabase(process.env.DB_NAME)
  let products = await Product.find().populate('colors').populate('sizes').exec()

  console.log(products);
  closeConnection()

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      hasError: false
    }
  }
}


export default ProductsPage;