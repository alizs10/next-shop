import { useRouter } from 'next/router'
import React from 'react'
import Master from '../../components/Layouts/Master'

function ProductPage() {

    const { query } = useRouter()

    return (
        <Master>
            <div className='w-full px-20 pt-24 self-center flex flex-col gap-y-8'>
                {query.name}

            </div>
        </Master>
    )
}

export default ProductPage