import { DeleteIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import React from 'react'
import Master from '../components/Layouts/Master'

function CartPage() {

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 10,
            precision: 0,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()


    return (
        <Master>
            <div className='relative w-full px-20 pt-24 self-center rounded-t-[60px] flex flex-col gap-y-8'>

                <section className='w-full grid grid-cols-5'>
                    <div className='col-span-3'>
                        <h2 className='font-bold text-3xl'>Your Bag</h2>

                        <ul className='mt-5 flex flex-col gap-2'>
                            <li className='grid grid-cols-4 gap-2 items-start'>
                                <img className="col-span-1 rounded-md" src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png' />
                                <span className='pl-3 col-span-2 flex flex-col gap-y-2'>
                                    <span>Nike Air Force</span>
                                    <span>Color: White</span>
                                    <span>Size: 7</span>
                                    <span>Quantity:</span>
                                    <HStack maxW='150px'>
                                        <Button {...inc}>+</Button>
                                        <Input {...input} />
                                        <Button {...dec}>-</Button>
                                    </HStack>
                                </span>
                                <span className='col-span-1 flex flex-col gap-y-2'>
                                    <span>102 $</span>
                                    <Button className='w-fit' colorScheme='red' variant='ghost'>
                                        <DeleteIcon w={5} h={5} />
                                    </Button>
                                </span>
                            </li>
                            <li className='grid grid-cols-4 gap-2 items-start'>
                                <img className="col-span-1 rounded-md" src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png' />
                                <span className='pl-3 col-span-2 flex flex-col gap-y-2'>
                                    <span>Nike Air Force</span>
                                    <span>Color: White</span>
                                    <span>Size: 7</span>
                                    <span>Quantity:</span>
                                    <HStack maxW='150px'>
                                        <Button {...inc}>+</Button>
                                        <Input {...input} />
                                        <Button {...dec}>-</Button>
                                    </HStack>
                                </span>
                                <span className='col-span-1 flex flex-col gap-y-2'>
                                    <span>102 $</span>
                                    <Button className='w-fit' colorScheme='red' variant='ghost'>
                                        <DeleteIcon w={5} h={5} />
                                    </Button>
                                </span>
                            </li>
                            <li className='grid grid-cols-4 gap-2 items-start'>
                                <img className="col-span-1 rounded-md" src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png' />
                                <span className='pl-3 col-span-2 flex flex-col gap-y-2'>
                                    <span>Nike Air Force</span>
                                    <span>Color: White</span>
                                    <span>Size: 7</span>
                                    <span>Quantity:</span>
                                    <HStack maxW='150px'>
                                        <Button {...inc}>+</Button>
                                        <Input {...input} />
                                        <Button {...dec}>-</Button>
                                    </HStack>
                                </span>
                                <span className='col-span-1 flex flex-col gap-y-2'>
                                    <span>102 $</span>
                                    <Button className='w-fit' colorScheme='red' variant='ghost'>
                                        <DeleteIcon w={5} h={5} />
                                    </Button>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-2'>
                        <h2 className='text-2xl pb-2'>Summary</h2>

                        <ul className='mt-2 flex flex-col gap-y-2 text-lg'>
                            <li className='flex justify-between items-center'>
                                <span>Subtotal</span>
                                <span>330 $</span>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span>Estimated Shipping & Handling</span>
                                <span>7 $</span>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span>Estimated Tax</span>
                                <span>2 $</span>
                            </li>
                        </ul>

                        <span className='text-lg mt-2 pt-2 border-t border-gray-200 flex justify-between items-center'>
                            <span>Total</span>
                            <span>345 $</span>
                        </span>

                        <Button className='w-full mt-2'  fontSize={20} colorScheme='teal' variant='solid'>
                            Checkout
                        </Button>
                    </div>

                </section>
            </div>
        </Master>
    )
}

export default CartPage