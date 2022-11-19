import { DeleteIcon } from '@chakra-ui/icons'
import { Badge, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function Head() {
  return (
    <div className='px-5 py-2 grid grid-cols-12 bg-orange-200'>
      <div className='col-span-3 flex justify-center items-center font-bold text-2xl'>
        <img className='w-20' src='/assets/icons/nike.svg' />
        <span className='ml-5'>Nike's Shoes</span>
      </div>
      <ul className='col-span-7 flex justify-center items-center gap-8 text-base'>
        <li className='underline underline-offset-4 cursor-pointer'>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='underline underline-offset-4 cursor-pointer'>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className='underline underline-offset-4 cursor-pointer'>Contact</li>
      </ul>
      <div className='col-span-2 z-50 flex justify-center gap-2 items-center'>
        <Popover>
          <PopoverTrigger>
            <Button colorScheme='gray' variant='link'>
              <img className='w-7 h-7' src='/assets/icons/cart.svg' />
              <div className='absolute -bottom-4 -right-1'>
                <Badge>1</Badge>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Cart</PopoverHeader>
            <PopoverBody>
              <div className='flex flex-col'>
                <li className='grid grid-cols-4 gap-2 items-center'>
                  <img className="col-span-1 rounded-md" src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png' />
                  <span className='col-span-2 flex flex-col gap-y-2'>
                    <span>Nike Air Force x 2</span>
                    <span>102 $</span>
                  </span>
                  <span className='col-span-1 flex justify-end'>
                    <Button colorScheme='red' variant='ghost'>
                      <DeleteIcon w={5} h={5} />
                    </Button>
                  </span>
                </li>
              </div>
            </PopoverBody>
            <PopoverFooter>
              <div className='flex flex-col gap-y-2'>
                <span className='flex justify-between text-md'>
                  <span>Total:</span>
                  <span>1200 $</span>
                </span>
                <Button className='w-full' colorScheme='teal' variant='solid'>
                  Checkout
                </Button>
              </div>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <span>|</span>
        <button className='text-lg font-light'>Login</button>
      </div>
    </div>
  )
}

export default Head