import React from 'react'
import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import Pagination from '../../components/Pagination'

function ProductsPage(props) {

  return (
    <Master>
      <Products items={props.products}/>
      <Pagination />
    </Master>
  )
}

export async function getStaticProps() {

  let response = await fetch('https://nike-shop-ac988-default-rtdb.firebaseio.com/products.json')
  let data = await response.json()

  let allProducts = []

  for (const key in data) {
    allProducts.push({ id: key, ...data[key] })
  }

  console.log(allProducts);

  return {
    props: {
      products: allProducts
    },
    revalidate: 60
  }
}


export default ProductsPage