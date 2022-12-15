import { Button, HStack, Input, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

function CreateProduct() {

    const [showCreateProduct, setShowCreateProduct] = useState(false)

    //form values
    const nameRef = useRef()
    const priceRef = useRef()
    const discountPercentageRef = useRef()
    const marketableNumberRef = useRef()
    const soldNumberRef = useRef()
    const frozenNumberRef = useRef()
    const imageSrcRef = useRef()


    const [sizes, setSizes] = useState([])

    const manSizeRef = useRef()
    const womanSizeRef = useRef()

    const handleAddSize = () => {
        let size = {};

        if (manSizeRef.current.value === "" ||
            manSizeRef.current.value.trim() === "" ||
            womanSizeRef.current.value === "" ||
            womanSizeRef.current.value.trim() === "") return


        size.size = `M ${manSizeRef.current.value} / W ${womanSizeRef.current.value}`
        size.id = new Date().toISOString()
        setSizes(prevState => [...prevState, size])

        manSizeRef.current.value = ""
        womanSizeRef.current.value = ""
    }

    const [colors, setColors] = useState([])

    const colorCodeRef = useRef()
    const colorNameRef = useRef()

    const handleAddColor = () => {
        
        let color = {};
       
        if (colorCodeRef.current.value === "" ||
        colorCodeRef.current.value.trim() === "" ||
        colorNameRef.current.value === "" ||
        colorNameRef.current.value.trim() === "") return

        color.code = "#" + colorCodeRef.current.value
        color.name = colorNameRef.current.value
        color.id = new Date().toISOString()

        setColors(prevState => [...prevState, color])

        colorCodeRef.current.value = ""
        colorNameRef.current.value = ""
    }

    const handleDeleteColor = colorId => {
        let filteredColors = colors.filter(color => color.id !== colorId)
        setColors(filteredColors)
    }

    const handleDeleteSize = sizeId => {
        let filteredSizes = sizes.filter(size => size.id !== sizeId)
        setSizes(filteredSizes)
    }

    const toggleShowCreateProduct = () => {
        setShowCreateProduct(prevState => !prevState)
    }

    const handleSubmit = e => {
        e.preventDefault();

        let inputData = {};
        inputData.name = nameRef.current.value
        inputData.price = priceRef.current.value
        inputData.image = imageSrcRef.current.value
        inputData.marketableNumber = marketableNumberRef.current.value
        inputData.soldNumber = soldNumberRef.current.value
        inputData.frozenNumber = frozenNumberRef.current.value
        inputData.sizes = sizes
        inputData.colors = colors

        console.log(inputData);
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
            {showCreateProduct && (
                <div className='mx-auto rounded-md p-3 bg-orange-200 shadow-3xl w-3/4 lg:w-2/3'>
                    <span className='font-bold text-lg'>Create New Product</span>

                    <form onSubmit={handleSubmit}>
                        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Name:</label>
                                <Input ref={nameRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Price:</label>
                                <Input ref={priceRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Image Src:</label>
                                <Input ref={imageSrcRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Discount Percentage:</label>
                                <Input ref={discountPercentageRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <span className='mt-4 col-span-1 md:col-span-2'>Store</span>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Marketable Number:</label>
                                <Input ref={marketableNumberRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Sold Number:</label>
                                <Input ref={soldNumberRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 flex flex-col gap-y-2'>
                                <label>Frozen Number:</label>
                                <Input ref={frozenNumberRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' />
                            </div>
                            <div className='col-span-1 md:col-span-2 flex flex-col gap-y-2'>
                                <label>Sizes:</label>

                                <div className='flex gap-2 flex-wrap'>
                                    {sizes.map(size => (

                                        <Tag
                                            key={size.id}
                                            borderRadius='full'
                                            variant='solid'
                                            colorScheme='green'
                                            width='fit-content'
                                            fontSize='lg'
                                            padding='5px 10px'
                                            boxShadow='lg'
                                        >
                                            <TagLabel>{size.size}</TagLabel>
                                            <TagCloseButton onClick={() => handleDeleteSize(size.id)} />
                                        </Tag>
                                    ))}
                                </div>

                                <div className='mt-2 grid grid-cols-5 gap-x-2'>
                                    <span className='col-span-2'>
                                        <Input ref={manSizeRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' _placeholder={{ color: 'gray.500' }} placeholder="Men's Size" />
                                    </span>
                                    <span className='col-span-2'>
                                        <Input ref={womanSizeRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' _placeholder={{ color: 'gray.500' }} placeholder="Women's Size" />
                                    </span>
                                    <span className='col-span-1'>
                                        <Button
                                            onClick={handleAddSize}
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
                            <div className='mt-4 col-span-1 md:col-span-2 flex flex-col gap-y-2'>
                                <label>Colors:</label>
                                <div className='flex gap-2 flex-wrap'>
                                    {colors.map(color => (
                                        <Tag
                                            key={color.id}
                                            borderRadius='full'
                                            variant='solid'
                                            colorScheme='green'
                                            width='fit-content'
                                            fontSize='lg'
                                            padding='5px 10px'
                                            boxShadow='lg'
                                        >
                                            <div
                                                style={{ backgroundColor: color.code }}
                                                className="w-4 h-4 rounded-full mr-2"></div>
                                            <TagLabel>{color.name}</TagLabel>
                                            <TagCloseButton onClick={() => handleDeleteColor(color.id)}/>
                                        </Tag>
                                    ))}
                                </div>

                                <div className='mt-2 grid grid-cols-5 gap-x-2'>
                                    <span className='col-span-2'>
                                        <Input ref={colorNameRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' _placeholder={{ color: 'gray.500' }} placeholder="Color's Name" />
                                    </span>
                                    <span className='col-span-2'>
                                        <Input ref={colorCodeRef} focusBorderColor='orange.400' borderColor='gray.500' _hover={{ borderColor: 'gray.700' }} borderWidth='2px' _placeholder={{ color: 'gray.500' }} placeholder="Color's Code" />
                                    </span>
                                    <span className='col-span-1'>
                                        <Button
                                            onClick={handleAddColor}
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
                        </div>

                        <Button
                            type='submit'
                            marginTop='15px'
                            width='full'
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