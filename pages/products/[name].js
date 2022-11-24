import { Button, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Master from '../../components/Layouts/Master'

function ProductPage() {

    const { query } = useRouter()

    return (
        <Master>
            <div className='w-full px-20 pt-24 self-center flex flex-col gap-y-8'>
                <div className="flex flex-col gap-y-2">
                    <img className="mx-auto w-3/4 xl:w-full rounded-md" />
                    <span className="text-sm">Color:</span>
                    <div className="flex gap-2">
                        <img className="rounded-md w-12 cursor-pointer" />
                        <div className="rounded-md overflow-hidden border-2 border-green-200 ">
                            <img className="w-12 cursor-pointer" />
                        </div>
                        <img className="rounded-md w-12 cursor-pointer" />
                        <img className="rounded-md w-12 cursor-pointer" />
                    </div>

                    <span className="text-sm">Size:</span>
                    <Select placeholder='Select option'>
                        <option value='option1'>3.5</option>
                        <option value='option2'>4</option>
                        <option value='option3'>5</option>
                        <option value='option4'>6</option>
                        <option value='option5'>7</option>
                        <option value='option6'>8</option>
                        <option value='option7'>9</option>
                    </Select>

                    <span className="text-md">Price: 80 $</span>
                    <Button colorScheme="teal" >ADD TO BAG</Button>
                </div>

            </div>
        </Master>
    )
}

export default ProductPage