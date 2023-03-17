import { Button, color, HStack, Input, Switch, Tag, TagCloseButton, TagLabel, Textarea } from '@chakra-ui/react'
import { randomUUID } from 'crypto'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import NewAttributeModal from './NewAttributeModal'

function CreateProduct() {

    const [showCreateProduct, setShowCreateProduct] = useState(false)
    const [isFormDisable, setIsFormDisable] = useState(false)
    const [loading, setLoading] = useState(true)

    const [sizes, setSizes] = useState([])

    useEffect(() => {
        if ((showCreateProduct && sizes.length > 0) || !showCreateProduct) return

        fetchData()
    }, [showCreateProduct])


    async function fetchData() {

        let res = await fetch('/api/sizes')

        let data = await res.json()

        if (res.status === 200) {

            setSizes(data.sizes)
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
        inputData.gallery = images.map(image => image.src)
        inputData.status = status
        inputData.attributes = attributes.map(attr => {
            delete attr.key
            return attr
        });

        console.log(inputData.attributes);

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
        setImages([])
        setAttributes([])
        nameRef.current.value = ""
        priceRef.current.value = ""
        imageSrcRef.current.value = ""
        discountPercentageRef.current.value = ""
        marketableNumberRef.current.value = ""
        soldNumberRef.current.value = ""
        frozenNumberRef.current.value = ""
        descriptionRef.current.value = ""
    }

    const [newAttributeModalVis, setNewAttributeModalVis] = useState(false)

    function toggleNewAttributeModal() {
        setNewAttributeModalVis(prevState => !prevState)
    }

    const [attributes, setAttributes] = useState([])

    function handleAddNewAttribute() {
        let newAttribute = { ...newAttr, key: Math.floor(Math.random() * 1000) }
        setAttributes(prevState => [...prevState, newAttribute])
        setNewAttr({})
        setNewAttributeModalVis(false)
    }

    function handleRemoveAttribute(attrKey) {
        let filteredAttributes = attributes.filter(attr => attr.key !== attrKey)
        setAttributes(filteredAttributes)
    }

    const [newAttr, setNewAttr] = useState({})

    function handleChangeNewAttr(field, newValue) {
        setNewAttr(prevState => ({ ...prevState, [field]: newValue }))
    }

    return (
        <section className='flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowCreateProduct}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showCreateProduct ? 'Hide ' : ''}Add New Product
            </Button>
            {loading && (<span>loading</span>)}
            {(showCreateProduct && !loading) && (
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

                                <div className='flex justify-between items-center'>
                                    <label className='text-lg'>Attributes:</label>
                                    <button type='button' onClick={toggleNewAttributeModal} className='px-3 py-2 bg-blue-500 rounded-md w-fit text-sm text-white font-semibold'>New Attribute</button>
                                </div>


                                <div className='grid grid-cols-6 gap-2'>
                                    {attributes.map(attr => (
                                        <div key={attr.key} className='col-span-1 rounded-md bg-gray-200 p-3 flex flex-col gap-y-1'>
                                            <Image className='w-full aspect-square rounded-md' src={attr.image} height={100} width={100} />
                                            <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                                <div style={{ backgroundColor: attr.palette[0] }} className="w-1/2 h-full border-r-2 border-white"></div>
                                                <div style={{ backgroundColor: attr.palette[1] }} className="w-1/2 h-full"></div>
                                            </div>
                                            <span className='text-xs text-gray-800'>Sizes: {attr.sizes.length}</span>
                                            <span onClick={() => handleRemoveAttribute(attr.key)} className='text-xs cursor-pointer text-red-500 underline underline-offset-4'>remove</span>
                                        </div>
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

            {newAttributeModalVis && (
                <NewAttributeModal newAttr={newAttr} handleAddNewAttribute={handleAddNewAttribute} toggleNewAttributeModal={toggleNewAttributeModal} handleChangeNewAttr={handleChangeNewAttr} sizes={sizes} />
            )}
        </section>
    )
}

export default CreateProduct