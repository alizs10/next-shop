import ArrowLeftIcon from '../components/ui/icons/ArrowLeftIcon'
import Link from 'next/link'
import React from 'react'

function Navbar({ sidebarVis, toggleSidebar }) {

    return (
        <ul
            className='h-screen w-1/2 transition-all duration-300 bg-gray-200 z-[999] flex flex-col p-3 
                 md:p-0 md:bg-transparent md:h-auto md:w-auto md:flex-row md:col-span-7 md:justify-center items-center gap-8 text-base'>

            {sidebarVis && (<div className='md:hidden w-full flex justify-end'>
                <span onClick={(e) => {
                    e.stopPropagation()
                    toggleSidebar()
                }} className='p-3 cursor-pointer scale-90'>
                    <ArrowLeftIcon />
                </span>
            </div>)}

            <li className='mt-10 md:m-0 underline underline-offset-4 cursor-pointer'>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className='underline underline-offset-4 cursor-pointer'>
                <Link href="/products">
                    Products
                </Link>
            </li>
            <li className='underline underline-offset-4 cursor-pointer'>Contact</li>
            <li className='underline underline-offset-4 cursor-pointer'>
                <Link href="/about">
                    About
                </Link>
            </li>
        </ul>
    )
}

export default Navbar