import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import Image from "next/image";

function ViewProductModal({ isOpen, onOpen, onClose, product }) {


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{product.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className="w-full flex flex-col items-center gap-y-2 justify-center">
                        <Image className="w-full rounded-xl" src={product.image} height={300} width={300} alt={product.name} />
                        <div className="w-full flex flex-col gap-y-2">
                            <span className="text-lg text-bold">About product</span>
                            <p className="text-sm text-justify w-full">{product.description}</p>
                        </div>

                        {product.sizes.length > 0 && (
                            <div className='w-full flex flex-col gap-2'>
                                <span className="text-sm">Sizes:</span>
                                <div className='grid grid-cols-4 gap-2'>
                                    {product.sizes.map((size, index) => (
                                        <span
                                            key={index} className={`rounded-xl px-5 py-2 bg-gray-200`}>
                                            {size.size}
                                        </span>
                                    ))}

                                </div>
                            </div>
                        )}

                        {product.colors.length > 0 && (
                            <div className='w-full flex flex-col gap-y-2'>
                                <span className="text-sm">Colors:</span>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color, index) => (
                                        <span
                                            key={index} className='p-[1px] rounded-full w-10 h-10 border-2 border-gray-500'>
                                            <div
                                                style={{ backgroundColor: "#" + color.color_code }}
                                                className='overflow-hidden flex justify-center items-center rounded-full w-full h-full'>
                                            </div>
                                        </span>
                                    ))}

                                </div>

                            </div>
                        )}

                        <div className='flex w-full justify-between gap-y-2 text-md'>
                            <span>Price:</span>
                            <div className='flex flex-col'>
                                <span className="text-base self-end line-through">{product.price} $</span>
                                <span className="text-4xl">{product.price - (product.price * (product.discount_percentage / 100))} $</span>
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='red' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ViewProductModal;