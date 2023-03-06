import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Landing() {
    return (
        <div className="mt-20 grid grid-cols-2 gap-8">


            <div className='col-span-1 bg-orange-200 rounded-full mx-auto w-[400px] aspect-square flex justify-center items-center'>
                <Image className='mr-20 rotate-[15deg] scale-[175%]' src='/assets/landing-img.png' width={600} height={600} />
            </div>


            <div className='col-span-2 md:col-span-1 flex justify-center items-center flex-col gap-y-4'>
                <h1 className='text-5xl md:text-7xl font-bold'>JUST DO IT</h1>
                <Link href="/products">
                    <button className='rounded-full bg-orange-200 text-lg px-5 py-3 hover:px-8 transition-all duration-300'>Explore now</button>
                </Link>
            </div>

        </div>
    )
}

export default Landing