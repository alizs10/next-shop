import { RepeatIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Colors() {

    const [showColors, setShowColors] = useState(false)
    const [loading, setLoading] = useState(false)
    const [colors, setColors] = useState([])

    const toggleShowColors = () => {
        setShowColors(prevState => !prevState)
    }


    useEffect(() => {
        if (showColors && colors.length == 0) {
            fetchColors()
        }
    }, [showColors])

    const fetchColors = async () => {
        setLoading(true)
        const toastLoadingId = toast.loading("fetching colors ...")

        let res = await fetch('/api/colors')


        if (res.status === 200) {
            toast.update(toastLoadingId, {
                render: "colors loaded successfully", type: "success", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
            let data = await res.json()
            setColors(data.colors)
            setLoading(false)

        } else {
            toast.update(toastLoadingId, {
                render: "error while loading data", type: "error", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }


    }

    const handleDeleteProduct = async docId => {

        let response = await fetch('/api/colors', {
            method: "DELETE",
            body: JSON.stringify({ id: docId }),
            headers: {
                ContentType: "application/json"
            }
        })

        if (response.status === 200) {
            toast.success("Product Deleted Successfully")
            fetchColors()
        }
    }

    return (
        <section className='mt-4 flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowColors}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showColors ? 'Hide ' : 'Show '}Colors
            </Button>

            {showColors && (
                <div className='flex flex-col gap-y-2 py-3 text-gray-800'>
                    <div className='flex justify-between items-end'>
                        <span className='font-bold text-lg text-white'>Colors</span>
                        <Button size="sm"
                            onClick={fetchColors}
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

                    {!loading && colors.length > 0 && (
                        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                            {colors.map(color => (
                                <div key={color._id} className='p-3 bg-white text-gray-800 flex items-center gap-x-2 rounded-xl'>
                                    <div className='border-2 border-black p-[2px] rounded-full'>
                                        <div className='h-[2rem] aspect-square rounded-full' style={{ backgroundColor: '#' + color.color_code }}></div>
                                    </div>
                                    <span>{color.color_name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}

export default Colors