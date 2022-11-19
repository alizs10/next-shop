import React from 'react'
import Product from './Product'

function Products() {
  return (
    <div className='relative w-full px-20 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>
      <div className='absolute top-0 left-0 right-0 h-20 bg-orange-200'>
        <div className='bg-white w-full h-full rounded-t-full'></div>
      </div>
      <div className='gap-8 grid grid-cols-6'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className='gap-8 grid grid-cols-7'>
        <Product />
        <Product />
        <Product />
        <Product discount={15} />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products