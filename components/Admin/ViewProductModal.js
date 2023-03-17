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

                        {product.attributes.length > 0 && (
                            <div className='w-full flex flex-col gap-y-2'>
                                <span className="text-sm">Colors:</span>
                                <div className="flex flex-wrap gap-2">
                                    {product.attributes.map((attr) => (
                                        <div key={attr._id} className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                            <div style={{ backgroundColor: attr.palette[0] }} className="w-1/2 h-full border-r-2 border-white"></div>
                                            <div style={{ backgroundColor: attr.palette[1] }} className="w-1/2 h-full"></div>
                                        </div>
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