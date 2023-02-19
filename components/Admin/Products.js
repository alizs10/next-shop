import { RepeatIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Products() {

    const [showProducts, setShowProducts] = useState(false)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const toggleShowProducts = () => {
        setShowProducts(prevState => !prevState)
    }


    useEffect(() => {
        if (showProducts && products.length == 0) {
            fetchProducts()
        }
    }, [showProducts])

    const fetchProducts = async () => {
        setLoading(true)
        const toastLoadingId = toast.loading("fetching products ...")


        try {

            let res = await fetch('/api/products')


            if (res.status === 200) {
                toast.update(toastLoadingId, {
                    render: "porudcts loaded successfully", type: "success", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                let data = await res.json()
                setProducts(data.products)
                setLoading(false)
                console.log(data);
            } else {
                toast.update(toastLoadingId, {
                    render: "error while loading data", type: "error", isLoading: false, autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }


        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDeleteProduct = async docId => {

        let response = await fetch('/api/products', {
            method: "DELETE",
            body: JSON.stringify({ id: docId }),
            headers: {
                ContentType: "application/json"
            }
        })

        if (response.status === 200) {
            toast.success("Product Deleted Successfully")
            fetchProducts()
        }
    }

    return (
        <section className='mt-4 flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowProducts}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showProducts ? 'Hide ' : 'Show '}Products
            </Button>

            {showProducts && (
                <div className='flex flex-col gap-y-2 py-3 text-gray-800'>
                    <div className='flex justify-between items-end'>
                        <span className='font-bold text-lg text-white'>Products</span>
                        <Button size="sm"
                            onClick={fetchProducts}
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

                    {!loading && products.length > 0 && (
                        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
                            {products.map(product => (
                                <Card key={product._id} maxW='sm' bgColor="whiteAlpha.800">
                                    <CardBody>
                                        <Image
                                            src={product.image}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{product.name}</Heading>

                                            <Text color='gray.700' fontSize='2xl'>
                                                ${product.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider borderColor='gray.900' bgColor='gray.900' borderWidth="1px" />
                                    <CardFooter>
                                        <ButtonGroup spacing='2'>
                                            <Button
                                                onClick={handleDeleteProduct.bind(null, product._id)}
                                                variant='solid' colorScheme='red'>
                                                Delete
                                            </Button>
                                            <Button variant='solid' colorScheme='yellow'>
                                                Edit
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}

export default Products