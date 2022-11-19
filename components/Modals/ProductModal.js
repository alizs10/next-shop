import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react";

const ProductModal = ({ isOpen, onClose, product }) => {

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
                        <img className="mx-auto w-3/4 xl:w-full rounded-md" src={product.img} />
                        <span className="text-sm">Choose color:</span>
                        <div className="flex gap-2">
                            <img className="rounded-md w-12 cursor-pointer" src={product.img} />
                            <div className="rounded-md overflow-hidden border-2 border-green-200 ">
                                <img className="w-12 cursor-pointer" src={product.img} />
                            </div>
                            <img className="rounded-md w-12 cursor-pointer" src={product.img} />
                            <img className="rounded-md w-12 cursor-pointer" src={product.img} />
                        </div>

                        <span className="text-sm">Select Size:</span>
                        <Select placeholder='Select option'>
                            <option value='option1'>3.5</option>
                            <option value='option2'>4</option>
                            <option value='option3'>5</option>
                            <option value='option4'>6</option>
                            <option value='option5'>7</option>
                            <option value='option6'>8</option>
                            <option value='option7'>9</option>
                        </Select>

                        <span className="text-md">Price: 80 $</span>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={onClose} colorScheme="teal" className="ml-2">BUY NOW!</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ProductModal;