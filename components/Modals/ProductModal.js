import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContext";
import SelectedItem from "../ui/SelectedItem";

const ProductModal = ({ isOpen, onClose, product }) => {

    const router = useRouter()

    const { finalPrice, selectedColor, selectedSize, handleUpdatePrice, handleSelectColor, handleSelectSize, handleInitialPrice } = useContext(ProductContext)

    useEffect(() => {
        if(!product) return
        handleInitialPrice(product)
    }, [])

    useEffect(() => {
        if(!product) return
        handleUpdatePrice(product)
    }, [selectedColor, selectedSize])

    const NavigateToProductPageHandler = () => {
        router.push(`/products/${product.name}`)
    }


    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader>{product.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="flex flex-col gap-y-2">
                        <div className="self-center rounded-md overflow-hidden">
                            <Image src={product.image} width="300" height="300" />
                        </div>
                        {product.colors.length > 0 && (
                            <div className='flex flex-col gap-y-2'>
                                <span className="text-sm">Color:</span>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color, index) => (
                                        <span
                                            onClick={handleSelectColor.bind(null, index)}
                                            key={index} className='p-[1px] rounded-full w-10 h-10 transition-all duration-300 cursor-pointer border-2 border-gray-500'>
                                            <div
                                                style={{ backgroundColor: color.code }}
                                                className='relative overflow-hidden flex justify-center items-center rounded-full w-full h-full'>
                                                {index == selectedColor && (
                                                    <SelectedItem />
                                                )}
                                            </div>
                                        </span>
                                    ))}

                                </div>

                            </div>
                        )}

                        <span className="text-sm">Size:</span>
                        <Select
                            onChange={e => handleSelectSize(e.target.value)}
                            >
                            {product.sizes.map((size, index) => (
                                <option value={index}>{size.size}</option>
                            ))}

                        </Select>

                        <span className="text-md">Price: {finalPrice} $</span>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={NavigateToProductPageHandler}>More Details</Button>
                    <Button onClick={onClose} colorScheme="teal" className="ml-2">BUY NOW!</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ProductModal;