import { CheckIcon } from '@chakra-ui/icons'
import { Button, Select } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Master from '../../components/Layouts/Master'
import BagIcon from '../../components/ui/icons/BagIcon'
import HeartIcon from '../../components/ui/icons/HeartIcon'

function ProductPage() {

    const { query } = useRouter()

    return (
        <Master>
            <div className='mx-20 mt-20 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                <div className='flex flex-col gap-2 col-span-1'>

                    <div className='w-full overflow-hidden hover:scale-105 transition-all duration-300 aspect-square rounded-3xl shadow-lg'>
                        <Image src='/products/p-1.webp' width="600" height="600" />
                    </div>

                    <div className='mt-8 grid grid-cols-5 gap-2'>
                        <div className='col-span-1 rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                            <Image src='/products/p-1.webp' width="200" height="200" />
                        </div>
                        <div className='col-span-1 rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                            <Image src='/products/p-1.webp' width="200" height="200" />
                        </div>
                        <div className='col-span-1 rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                            <Image src='/products/p-1.webp' width="200" height="200" />
                        </div>
                        <div className='col-span-1 rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                            <Image src='/products/p-1.webp' width="200" height="200" />
                        </div>
                        <div className='col-span-1 rounded-3xl overflow-hidden shadow-md hover:translate-y-2 transition-all duration-300 cursor-pointer'>
                            <Image src='/products/p-1.webp' width="200" height="200" />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 p-3 flex flex-col gap-y-8">
                    <h2 className='font-bold text-3xl'>Nike Air Max 260</h2>

                    <div className='flex flex-col gap-y-2'>
                        <span className="text-sm">Color:</span>
                        <div className="flex flex-wrap gap-2">
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='flex justify-center items-center rounded-full bg-green-500 w-full h-full'>
                                    <CheckIcon color="gray.700" />
                                </div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-pink-500 w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-blue-500 w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-white w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-black w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-yellow-400 w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-orange-400 w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-red-600 w-full h-full'></div>
                            </span>
                            <span className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                <div className='rounded-full bg-slate-600 w-full h-full'></div>
                            </span>
                        </div>

                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <span className="text-sm">Size:</span>

                        <div className='flex flex-wrap gap-2'>
                            <span className='rounded-xl px-5 py-2 bg-gray-100 border-[3px] cursor-pointer border-white hover:border-gray-400 transition-all duration-300'>
                                M 5 / W 6.5
                            </span>
                            <span className='rounded-xl px-5 py-2 bg-gray-100 border-[3px] cursor-pointer border-white hover:border-gray-400 transition-all duration-300'>
                                M 5 / W 6.5
                            </span>
                            <span className='rounded-xl px-5 py-2 bg-gray-100 border-[3px] cursor-pointer border-white hover:border-gray-400 transition-all duration-300'>
                                M 5 / W 6.5
                            </span>
                            <span className='rounded-xl px-5 py-2 bg-gray-100 border-[3px] cursor-pointer border-gray-400 hover:border-gray-400 transition-all duration-300'>
                                M 5 / W 6.5
                            </span>
                            <span className='rounded-xl px-5 py-2 bg-gray-100 border-[3px] cursor-pointer border-white hover:border-gray-400 transition-all duration-300'>
                                M 5 / W 6.5
                            </span>
                        </div>


                    </div>

                    <div className='flex w-full justify-between gap-y-2 text-md'>
                        <span>Price:</span>
                        <div className='flex flex-col'>
                            <span className="text-base line-through"> 80 $</span>
                            <span className="text-4xl"> 65 $</span>
                        </div>
                    </div>


                </div>

                <div className='col-span-1 p-3 flex flex-col gap-4'>
                    <h3 className='font-bold text-sm'>About Prodcut</h3>
                    <p className='leading-7 text-md text-justify'>
                        Laboris nostrud occaecat quis laboris irure anim Lorem eu. Elit incididunt officia aliquip magna ut exercitation laborum dolor amet nulla cillum anim non. Ad ea tempor sit cupidatat sunt. Deserunt in elit voluptate esse.

                        Lorem veniam quis eu Lorem voluptate ex pariatur veniam culpa do in do. Nulla nostrud occaecat incididunt et culpa qui commodo ipsum anim labore ad quis. Ea exercitation dolore incididunt non cupidatat ullamco.
                    </p>
                    <div className='mt-auto flex flex-col gap-y-4'>
                        <button className='w-full rounded-3xl py-5 bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-md text-gray-800 flex justify-center gap-x-4 items-center'>
                            <span><HeartIcon /></span>
                            <span className='text-lg'>ADD TO FAVORITE</span>
                        </button>
                        <button className='w-full rounded-3xl py-5 bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-md text-gray-800 flex justify-center gap-x-4 items-center'>
                            <span><BagIcon /></span>
                            <span className='text-lg'>ADD TO BAG</span>
                        </button>
                    </div>

                </div>

            </div>
        </Master>
    )
}

export default ProductPage