import React from 'react'
import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import ConnectionError from '../../components/ui/ConnectionError'

function ProductsPage(props) {


  return (
    <Master>
      {props.hasError ? (
        <ConnectionError />
      ) : (
        <>
          <Products items={props.products} />
        </>
      )}
    </Master>
  )
}

export async function getStaticProps() {

  console.log("sending req");
  try {
    let response = await fetch('https://nike-shop-ac988-default-rtdb.firebaseio.com/products.json')
    let data = await response.json()
    let allProducts = []

    for (const key in data) {
      allProducts.push({ id: key, ...data[key] })
    }

    return {
      props: {
        products: allProducts
      },
      revalidate: 60
    }
  } catch (error) {

    console.log("error");

    return {
      props: {
        products: [],
        hasError: true
      }
    }
  }

}


export default ProductsPage