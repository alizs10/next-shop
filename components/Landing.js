import Link from 'next/link'
import React from 'react'

function Landing() {
    return (
        <div className="pt-20 px-52 grid grid-cols-2">
            <div className='col-span-1 relative'>
                <div className='y-animated-radio w-full aspect-square bg-orange-200 rounded-full'>
                </div>
                <div className='x-animated-radio absolute bg-white rounded-full top-8 -left-8 w-full aspect-square flex justify-center items-center'>
                    <img src='/assets/landing-img.png' className='w-full rotate-[15deg] hover:scale-110 hover:rotate-[-15deg] transition-all duration-300' />
                </div>
            </div>

            <div className='col-span-1 flex justify-center items-center flex-col gap-y-4'>
                <h1 className='text-7xl font-bold'>JUST DO IT</h1>
                <Link href="/products">
                    <button className='rounded-full bg-orange-200 text-lg px-5 py-3 hover:scale-125 transition-all duration-300'>Explore now</button>
                </Link>
            </div>

        </div>
    )
}

export default Landing