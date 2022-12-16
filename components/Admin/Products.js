import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Products() {

    const [showProducts, setShowProducts] = useState(false)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const toggleShowProudcts = () => {
        setShowProducts(prevState => !prevState)
    }


    useEffect(() => {

        fetchProducts()

        setLoading(false)

    }, [])

    const fetchProducts = async () => {
        let res = await fetch('/api/products')
        let data = await res.json()
        setProducts(data.products)
    }

    return (
        <section className='mt-4 flex flex-col justify-center gap-y-4'>
            <Button
                onClick={toggleShowProudcts}
                width="fit-content"
                margin="auto"
                bgColor='orange.200' variant='solid'>
                {showProducts ? 'Hide ' : 'Show '}Products
            </Button>

            {showProducts && (
                <div className='flex flex-col gap-y-2 py-3 text-white'>
                    <span className='font-bold text-lg'>Products</span>

                    {loading && (
                        <span className='text-gray-200'>loading...</span>
                    )}

                    {products.length > 0 && (
                        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
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
                                            <Button variant='solid' colorScheme='red'>
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