import React from 'react'
import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'
import Pagination from '../../components/Pagination'

function ProductsPage() {
  return (
    <Master>
      <Products/>
      <Pagination/>
    </Master>
  )
}

export default ProductsPage