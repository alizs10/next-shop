import { Button, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

function CreateSize() {

    const [showCreateSize, setShowCreateSize] = useState(false)
    const [isFormDisable, setIsFormDisable] = useState(false)

    //form values
    const sizeRef = useRef()

    const toggleShowCreateSize = () => {
        setShowCreateSize(prevState => !prevState)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (isFormDisable) return

        let inputData = {
            size: sizeRef.current.value
        };

        setIsFormDisable(true)
        const toastLoadingId = toast.loading("creating new size ...")
        try {

            let res = await fetch('/api/sizes', {
                method: "POST",
                body: JSON.stringify(inputData),
                headers: {
                    "Content-Type": "application/json"
                },
            })

            if (res.status === 422) {
                let data = await res.json()
                toast.update(toastLoadingId, {
                    render: data.message, type: "warning", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }

            if (res.status === 201) {

                let data = await res.json()
                clearFrom()
                toast.update(toastLoadingId, {
                    render: "size created successfully", type: "success", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            } else {
                toast.update(toastLoadingId, {
                    render: "error while creating new size", type: "error", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })

            }

        } catch (error) {

            toast.update(toastLoadingId, {
                render: "error while creating new size", type: "error", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
            console.log(error);
        }


        setIsFormDisable(false)

    }

    const clearFrom = () => {
        sizeRef.current.value = ""
    }
    return (
        <section className='flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowCreateSize}
                width="fit-content"
                margin="auto"
                bgSize='orange.200' variant='solid'>
                {showCreateSize ? 'Hide ' : ''}Add New Size
            </Button>
            {showCreateSize && (
                <div className='mx-auto rounded-md p-3 bg-orange-200 shadow-3xl w-3/4 lg:w-2/3'>
                    <span className='font-bold text-lg'>Create New Size</span>

                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 grid grid-cols-1'>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Size:</label>
                                <Input ref={sizeRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>

                        </div>

                        <Button
                            type='submit'
                            marginTop='15px'
                            width='full'
                            disabled={isFormDisable}
                            colorScheme='orange' variant='solid'>
                            Create
                        </Button>
                    </form>
                </div>
            )}
        </section>
    )
}

export default CreateSize