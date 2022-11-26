import React from 'react'
import Filter from './Filter'
import Product from './Product'
import Search from './Search'

function Products() {
  return (
    <div className='relative w-full px-44 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>

      <div className='gap-8 grid grid-cols-5'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        
      </div>
      <div className='gap-8 grid grid-cols-6'>
        <Product />
        <Product />
        <Product />
        <Product discount={15} />
        <Product />
        <Product />
      </div>
      <Search />
      <Filter />
    </div>
  )
}

export default Products