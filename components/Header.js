import React, { useEffect, useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons'
import { Badge, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from './Navbar';
import BagIcon from './ui/icons/BagIcon';
import BarsIcon from './ui/icons/BarsIcon';
import Backdrop from './ui/Backdrop';
import { AnimatePresence } from 'framer-motion';

function Header() {

  const [sidebarVis, setSidebarVis] = useState(false)
  const [width, setWidth] = useState()

  useEffect(() => {

    window.addEventListener("resize", handleChangeWidth)

    return () => window.removeEventListener("resize", handleChangeWidth)

  }, [])

  function handleChangeWidth(w) {
    setWidth(document.body.clientWidth)
  }


  function toggleSidebar() {
    setSidebarVis(prevState => !prevState)
  }

  function renderNavbar() {

    let isScreenWide = width > 768 ? true : false;

    return !isScreenWide ? (
      <AnimatePresence>
        {sidebarVis && (
          <Backdrop blur={true} toggler={sidebarVis} handleClick={toggleSidebar}>
            <Navbar toggleSidebar={toggleSidebar} sidebarVis={sidebarVis} />
          </Backdrop>
        )}
      </AnimatePresence>
    ) : <Navbar isScreenWide={isScreenWide} toggleSidebar={toggleSidebar} sidebarVis={sidebarVis} />;

  }

  return (
    <>
      <div className='relative px-5 py-2 grid grid-cols-12 bg-orange-200'>

        <div className='col-span-2 md:hidden'>
          <span onClick={toggleSidebar} className='p-3 cursor-pointer'>
            <BarsIcon />
          </span>
        </div>

        <div className={`col-span-6 md:col-span-3 flex items-center font-bold text-lg md:text-2xl`}>
          <img className='w-12 md:w-20' src='/assets/icons/nike.svg' />
          <Link href="/">
            <span className='ml-5'>Nike's Shoes</span>
          </Link>
        </div>

        {renderNavbar()}

        <div className='col-span-4 md:col-span-2 z-50 flex justify-center gap-2 items-center'>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme='gray' variant='link'>
                <span className='text-gray-800'><BagIcon /></span>
                <div className='absolute -bottom-4 -right-1'>
                  <Badge borderRadius="md" paddingX="1.5" paddingY="0.5">1</Badge>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>
                <Link href="/cart">
                  Cart
                </Link>
              </PopoverHeader>
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
                  <Link href="/cart">
                    <Button className='w-full' colorScheme='teal' variant='solid'>
                      Checkout
                    </Button>
                  </Link>
                </div>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
          <span>|</span>
          <Link href="/auth/login">
            <span className='text-xl font-light'>Login</span>
          </Link>
        </div>
      </div>

    </>
  )
}

export default Header;