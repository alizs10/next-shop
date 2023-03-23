import Image from 'next/image';
import useAppStore from '../../../stores/app-store';
import TrashIcon from "../../ui/icons/TrashIcon";
import PlusIcon from "../../ui/icons/PlusIcon";
import MinusIcon from "../../ui/icons/MinusIcon";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


function Cart() {

    const { cartItems } = useAppStore()
    const { handleDecreaseQuantity, handleIncreaseQuantity, payAmount } = useContext(CartContext)

    const taxAmount = 2;
    const shippingAmount = 7;

    return (
        <section className='relative w-full p-20 flex flex-col gap-y-8'>

            <section className='w-full grid grid-cols-5 gap-10'>
                <div className='col-span-3'>
                    <div className='flex gap-x-4 items-center'>
                        <h2 className='font-bold text-3xl text-gray-400'>Your Bag</h2>
                        <div className='w-8 h-8 font-bold rounded-md flex justify-center items-center bg-gray-700 text-gray-300'>
                            {cartItems.length}
                        </div>
                    </div>

                    <ul className='mt-5 flex flex-col gap-2'>
                        {cartItems.map(item => (
                            <li key={item._id} className='relative flex flex-nowrap gap-2 shadow-lg bg-gray-700 rounded-xl p-3'>

                                <div className="absolute bottom-3 right-3 z-10 flex border-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-600">
                                    <span onClick={() => handleIncreaseQuantity(item)} className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-emerald-300 rounded-tl-xl hover:border-red-100 transition-all duration-300">
                                        <PlusIcon />
                                    </span>
                                    <span onClick={() => handleDecreaseQuantity(item)} className="p-2 cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-red-300 rounded-br-xl hover:border-red-100 transition-all duration-300">
                                        {item.quantity > 1 ? (
                                            <MinusIcon />
                                        ) : (
                                            <TrashIcon />
                                        )}
                                    </span>
                                </div>
                                <div className='w-[20%] p-3'>
                                    <Image className='w-full' src={item.product.image} alt={item.product.name} width={200} height={200} />
                                </div>
                                <div className='w-[80%] flex flex-col gap-y-2'>
                                    <span className='text-lg text-gray-300 font-bold'>{item.product.name} <span className='text-red-500 ml-2'>x{item.quantity}</span></span>
                                    <div className='flex items-center gap-x-4'>
                                        <span className='text-gray-300 text-md'>Color:</span>
                                        <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                                            <div style={{ backgroundColor: item.selectedAttributes.palette[0] }} className="w-1/2 h-full border-r-2 border-white"></div>
                                            <div style={{ backgroundColor: item.selectedAttributes.palette[1] }} className="w-1/2 h-full"></div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-y-1'>

                                        <div className='flex items-center gap-x-4'>
                                            <span className='text-gray-300 text-md'>Size:</span>
                                            <span className='font-bold text-lg text-gray-200'>{item.selectedAttributes.size.size.size}</span>
                                        </div>
                                        <div className='flex items-center gap-x-4'>
                                            <span className='text-gray-300 text-md'>Discount Amount:</span>
                                            <span className='font-bold text-lg text-red-300'>$ {item.discountAmount * item.quantity}</span>
                                        </div>
                                        <div className='flex items-center gap-x-4'>
                                            <span className='text-gray-300 text-md'>Pay Price:</span>
                                            <span className='font-bold text-lg text-gray-200'>$ {item.payPrice * item.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='col-span-2'>
                    <h2 className='text-2xl pb-2 text-red-500 font-bold'>Summary</h2>

                    <ul className='mt-2 flex flex-col gap-y-2 text-lg'>
                        <li className='flex justify-between items-center'>
                            <span className='text-lg text-gray-200'>Subtotal</span>
                            <span className='text-md text-gray-100'>{payAmount} $</span>
                        </li>
                        <li className='flex justify-between items-center'>
                            <span className='text-lg text-gray-200'>Estimated Shipping & Handling</span>
                            <span className='text-md text-gray-100'>{shippingAmount} $</span>
                        </li>
                        <li className='flex justify-between items-center'>
                            <span className='text-lg text-gray-200'>Estimated Tax</span>
                            <span className='text-md text-gray-100'>{taxAmount} $</span>
                        </li>
                    </ul>

                    <span className='text-lg mt-2 pt-2 border-t border-gray-600 flex justify-between items-center'>
                        <span className='text-2xl font-bold text-red-500'>Total</span>
                        <span className='text-2xl font-bold text-white'>{payAmount + shippingAmount + taxAmount} $</span>
                    </span>

                    <button className='w-full mt-2 py-2 rounded-xl bg-red-500 text-white'>
                        Checkout
                    </button>
                </div>

            </section>
        </section>
    );
}

export default Cart;