import React from 'react'
import { useRouter } from 'next/router'

import Master from '../../components/Layouts/Master'
import Products from '../../components/Products'

function SearchPage() {

  const { query } = useRouter()
  const searchedValue = query.search

  return (
    <Master>
      <Products/>
    </Master>
    
  )
}

export default SearchPage