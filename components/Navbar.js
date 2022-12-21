import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <ul className='col-span-7 flex justify-center items-center gap-8 text-base'>
            <li className='underline underline-offset-4 cursor-pointer'>
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