import { Badge } from '@chakra-ui/react'
import React from 'react'

function Head() {
  return (
    <div className='px-5 py-2 grid grid-cols-12 bg-orange-200'>
      <div className='col-span-3 flex justify-center items-center font-bold text-2xl'>
        <img className='w-20' src='/assets/icons/nike.svg' />
        <span className='ml-5'>Nike's Shoes</span>
      </div>
      <ul className='col-span-7 flex justify-center items-center gap-8 text-base'>
        <li className='underline underline-offset-4 cursor-pointer'>Home</li>
        <li className='underline underline-offset-4 cursor-pointer'>About</li>
        <li className='underline underline-offset-4 cursor-pointer'>Contact</li>
      </ul>
      <div className='col-span-2 flex justify-center gap-2 items-center'>
        <button className='relative'>
          <img className='w-7 h-7' src='/assets/icons/cart.svg' />
          <div className='absolute -bottom-4 -right-1'>
            <Badge>1</Badge>
          </div>
        </button>
        <span>|</span>
        <button className='text-lg font-light'>Login</button>
      </div>
    </div>
  )
}

export default Head