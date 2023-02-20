import { Button, color, HStack, Input, Switch, Tag, TagCloseButton, TagLabel, Textarea } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

function CreateProduct() {

    const [showCreateProduct, setShowCreateProduct] = useState(false)
    const [isFormDisable, setIsFormDisable] = useState(false)
    const [loading, setLoading] = useState(true)

    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])

    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])

    function addSize(id) {
        setSelectedSizes(prevState => [...prevState, id])
    }

    function addColor(id) {
        setSelectedColors(prevState => [...prevState, id])
    }

    function removeSize(id) {
        setSelectedSizes(prevState => prevState.filter(sizeId => sizeId !== id))
    }

    function removeColor(id) {
        setSelectedColors(prevState => prevState.filter(colorId => colorId !== id))
    }

    function isColorSelected(id) {
        return selectedColors.includes(id)
    }

    function isSizeSelected(id) {
        return selectedSizes.includes(id)
    }

    function toggleColor(id) {
        isColorSelected(id) ? removeColor(id) : addColor(id)
    }

    function toggleSize(id) {
        isSizeSelected(id) ? removeSize(id) : addSize(id)
    }

    function selectAllColors() {
        if (selectedColors.length === colors.length) {
            setSelectedColors([])
            return
        }
        setSelectedColors(colors.map(color => color._id))
    }

    function selectAllSizes() {
        if (selectedSizes.length === sizes.length) {
            setSelectedSizes([])
            return
        }
        setSelectedSizes(sizes.map(size => size._id))
    }

    useEffect(() => {
        fetchData()
    }, [])


    async function fetchData() {

        let res = await fetch('/api/colors')
        let res2 = await fetch('/api/sizes')

        let data = await res.json()
        let data2 = await res2.json()

        if (res.status === 200 && res2.status === 200) {
            console.log(data, data2);

            setColors(data.colors)
            setSizes(data2.sizes)
            setLoading(false)
        }

    }

    //form values
    const nameRef = useRef()
    const priceRef = useRef()
    const discountPercentageRef = useRef()
    const marketableNumberRef = useRef()
    const soldNumberRef = useRef()
    const frozenNumberRef = useRef()
    const imageSrcRef = useRef()
    const descriptionRef = useRef()

    const [status, setStatus] = useState(false)

    const [images, setImages] = useState([])

    const galleryImageSrcRef = useRef()

    const handleAddImage = () => {
        let image = {};

        if (galleryImageSrcRef.current.value === "" ||
            galleryImageSrcRef.current.value.trim() === ""
        ) return


        image.src = galleryImageSrcRef.current.value
        image.id = new Date().toISOString()
        setImages(prevState => [...prevState, image])

        galleryImageSrcRef.current.value = ""
    }


    const handleDeleteImage = imageId => {
        let filteredImages = images.filter(image => image.id !== imageId)
        setImages(filteredImages)
    }

    const toggleShowCreateProduct = () => {
        setShowCreateProduct(prevState => !prevState)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (isFormDisable) return

        let inputData = {};
        inputData.name = nameRef.current.value
        inputData.price = priceRef.current.value
        inputData.image = imageSrcRef.current.value
        inputData.discount_percentage = discountPercentageRef.current.value
        inputData.marketable_number = marketableNumberRef.current.value
        inputData.sold_number = soldNumberRef.current.value
        inputData.frozen_number = frozenNumberRef.current.value
        inputData.description = descriptionRef.current.value
        inputData.sizes = selectedSizes
        inputData.colors = selectedColors
        inputData.gallery = images.map(image => image.src)
        inputData.status = status


        try {
            setIsFormDisable(true)
            const toastLoadingId = toast.loading("creating product ...")

            let res = await fetch('/api/products', {
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
                    render: "product created successfully", type: "success", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            } else {
                toast.update(toastLoadingId, {
                    render: "error while creating new product", type: "error", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })

            }

        } catch (error) {

            toast.update(toastLoadingId, {
                render: "error while creating new product", type: "error", isLoading: false, autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            })
            console.log(error);
        }


        setIsFormDisable(false)

    }


    const clearFrom = () => {
        setSelectedSizes([])
        setSelectedColors([])
        setImages([])
        nameRef.current.value = ""
        priceRef.current.value = ""
        imageSrcRef.current.value = ""
        discountPercentageRef.current.value = ""
        marketableNumberRef.current.value = ""
        soldNumberRef.current.value = ""
        frozenNumberRef.current.value = ""
        descriptionRef.current.value = ""
    }



    if (loading) return

    return (
        <section className='flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowCreateProduct}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showCreateProduct ? 'Hide ' : ''}Add New Product
            </Button>
            {showCreateProduct && (
                <div className='mx-auto rounded-md p-3 bg-orange-200 shadow-3xl w-3/4 lg:w-2/3'>
                    <span className='font-bold text-lg'>Create New Product</span>

                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='col-span-2 flex flex-col gap-y-2'>
                                <label>Name:</label>
                                <Input ref={nameRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 flex flex-col gap-y-2'>
                                <label>Price:</label>
                                <Input ref={priceRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 flex flex-col gap-y-2'>
                                <label>Image Src:</label>
                                <Input ref={imageSrcRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 flex flex-col gap-y-2'>
                                <label>Discount Percentage:</label>
                                <Input ref={discountPercentageRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 flex flex-col gap-y-2'>
                                <label>Description:</label>
                                <Textarea ref={descriptionRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 flex justify-between items-center'>
                                <label>Status:</label>
                                <Switch colorScheme='blue' size='lg' value={status} onChange={e => setStatus(prevState => !prevState)} />
                            </div>
                            <span className='mt-4 col-span-2'>Gallery</span>
                            <div className='col-span-1 md:col-span-2 flex flex-col gap-y-2'>
                                <div className='flex gap-2 flex-wrap'>
                                    {images.map(image => (

                                        <Tag
                                            key={image.id}
                                            borderRadius='full'
                                            variant='solid'
                                            colorScheme='green'
                                            width='fit-content'
                                            fontSize='lg'
                                            padding='5px 10px'
                                            boxShadow='lg'
                                        >
                                            <TagLabel>{image.src}</TagLabel>
                                            <TagCloseButton onClick={() => handleDeleteImage(image.id)} />
                                        </Tag>
                                    ))}
                                </div>

                                <div className='mt-2 grid grid-cols-7 gap-x-2'>

                                    <span className='col-span-6'>
                                        <Input ref={galleryImageSrcRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' _placeholder={{ color: 'gray.500' }} placeholder="Image Src" />
                                    </span>
                                    <span className='col-span-1'>
                                        <Button
                                            onClick={handleAddImage}
                                            width='full'
                                            bgColor='gray.600'
                                            color='white'
                                            _hover={{ bgColor: 'gray.700' }}
                                        >
                                            Add
                                        </Button>
                                    </span>
                                </div>
                            </div>
                            <span className='mt-4 col-span-2'>Store</span>
                            <div className='col-span-2 md:col-span-1 flex flex-col gap-y-2'>
                                <label>Marketable Number:</label>
                                <Input ref={marketableNumberRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 md:col-span-1 flex flex-col gap-y-2'>
                                <label>Sold Number:</label>
                                <Input ref={soldNumberRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-2 md:col-span-1 flex flex-col gap-y-2'>
                                <label>Frozen Number:</label>
                                <Input ref={frozenNumberRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>

                            <div className='col-span-2 flex flex-col gap-y-2'>
                                <span className='flex justify-between items-center py-2'>
                                    <label>Sizes:</label>
                                    <button className='px-2 py-1 rounded-xl bg-blue-300' type='button' onClick={selectAllSizes}>check all</button>
                                </span>

                                <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-2'>
                                    {sizes.map(size => (
                                        <button onClick={() => toggleSize(size._id)} type='button' key={size._id} className={`col-span-1 shadow-md flex justify-center items-center rounded-full transition-all duration-300 gap-x-2 p-3 ${isSizeSelected(size._id) ? 'bg-emerald-400' : 'bg-white'}`}>
                                            {size.size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-4 col-span-2 flex flex-col gap-y-2'>

                                <span className='flex justify-between items-center py-2'>
                                    <label>Colors:</label>
                                    <button className='px-2 py-1 rounded-xl bg-blue-300' type='button' onClick={selectAllColors}>check all</button>
                                </span>
                                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2'>
                                    {colors.map(color => (
                                        <button onClick={() => toggleColor(color._id)} type='button' key={color._id} className={`col-span-1 shadow-md flex items-center rounded-full transition-all duration-300 gap-x-2 p-3 ${isColorSelected(color._id) ? 'bg-emerald-400' : 'bg-white'}`}>
                                            <div className='rounded-full w-8 p-[3px] border-2 border-black'>
                                                <div className='w-full aspect-square rounded-full' style={{ backgroundColor: "#" + color.color_code }}></div>
                                            </div>
                                            <span>{color.color_name}</span>
                                        </button>
                                    ))}
                                </div>


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

export default CreateProduct