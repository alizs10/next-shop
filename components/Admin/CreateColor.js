import { Button, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

function CreateColor() {

    const [showCreateColor, setShowCreateColor] = useState(false)
    const [isFormDisable, setIsFormDisable] = useState(false)

    //form values
    const colorNameRef = useRef()
    const colorCodeRef = useRef()

    const toggleShowCreateColor = () => {
        setShowCreateColor(prevState => !prevState)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (isFormDisable) return

        let inputData = {
            color_name: colorNameRef.current.value,
            color_code: colorCodeRef.current.value
        };

        try {
            setIsFormDisable(true)
            const toastLoadingId = toast.loading("creating new color ...")

            let res = await fetch('/api/colors', {
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
                    render: "color created successfully", type: "success", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            } else {
                toast.update(toastLoadingId, {
                    render: "error while creating new color", type: "error", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })

            }

        } catch (error) {

            toast.update(toastLoadingId, {
                render: "error while creating new color", type: "error", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
            console.log(error);
        }


        setIsFormDisable(false)

    }

    const clearFrom = () => {
        colorNameRef.current.value = ""
        colorCodeRef.current.value = ""
    }
    return (
        <section className='flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowCreateColor}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showCreateColor ? 'Hide ' : ''}Add New Color
            </Button>
            {showCreateColor && (
                <div className='mx-auto rounded-md p-3 bg-orange-200 shadow-3xl w-3/4 lg:w-2/3'>
                    <span className='font-bold text-lg'>Create New Color</span>

                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Color Name:</label>
                                <Input ref={colorNameRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Color Code:</label>
                                <Input ref={colorCodeRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
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

export default CreateColor