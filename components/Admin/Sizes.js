import { RepeatIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Sizes() {

    const [showSizes, setShowSizes] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sizes, setSizes] = useState([])

    const toggleShowSizes = () => {
        setShowSizes(prevState => !prevState)
    }


    useEffect(() => {
        if (showSizes && sizes.length == 0) {
            fetchSizes()
        }
    }, [showSizes])

    const fetchSizes = async () => {
        setLoading(true)
        const toastLoadingId = toast.loading("fetching sizes ...")

        let res = await fetch('/api/sizes')


        if (res.status === 200) {
            toast.update(toastLoadingId, {
                render: "sizes loaded successfully", type: "success", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
            let data = await res.json()
            setSizes(data.sizes)
            setLoading(false)
            console.log(data);
        } else {
            toast.update(toastLoadingId, {
                render: "error while loading data", type: "error", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }


    }

    const handleDeleteProduct = async docId => {

        let response = await fetch('/api/sizes', {
            method: "DELETE",
            body: JSON.stringify({ id: docId }),
            headers: {
                ContentType: "application/json"
            }
        })

        if (response.status === 200) {
            toast.success("Product Deleted Successfully")
            fetchSizes()
        }
    }

    return (
        <section className='mt-4 flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowSizes}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showSizes ? 'Hide ' : 'Show '}Sizes
            </Button>

            {showSizes && (
                <div className='flex flex-col gap-y-2 py-3 text-gray-800'>
                    <div className='flex justify-between items-end'>
                        <span className='font-bold text-lg text-white'>Sizes</span>
                        <Button size="sm"
                            onClick={fetchSizes}
                        >
                            <span className='flex gap-x-2 font-bold text-sm'>
                                <span>
                                    <RepeatIcon />
                                </span>
                                <span>
                                    refetch
                                </span>
                            </span>
                        </Button>
                    </div>

                    {loading && (
                        <SpinnerIcon textColor="white" />
                    )}

                    {!loading && sizes.length > 0 && (
                        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                            {sizes.map(size => (
                                <div key={size._id} className='p-3 rounded-xl bg-white text-gray-800 text-lg'>
                                    {size.size}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}

export default Sizes