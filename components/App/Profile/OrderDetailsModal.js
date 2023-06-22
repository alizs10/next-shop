import Image from "next/image";
import XIcon from "../../ui/icons/XIcon";
import MapIcon from "../../ui/icons/MapIcon";
import BackdropWrapper from "../../Common/BackdropWrapper";

function OrderDetailsModal({ toggle, order }) {

    let discountCode = order.discountCode;
    let payAmount = order.payAmount;
    let discountAmount = order.discountAmount;
    let shippingAmount = order.delivery?.price ?? 0;
    let taxAmount = order.tax;
    let total = payAmount + shippingAmount + taxAmount;
    let discountCodeAmount = discountCode ? (total * discountCode.percentage / 100) : 0


    function renderPaymentStatus(status) {
        switch (status) {
            case null:
                return "still"
                break;
            case '0':
                return "unsuccessful"
                break;
            case '1':
                return "successful"
                break;
            case '2':
                return "canceled"
                break;

            default:
                break;
        }
    }

    function renderOrderStatus(status) {
        switch (status) {
            case null:
                return "still"
                break;
            case 0:
                return "preparing your order"
                break;
            case 1:
                return "in post office"
                break;
            case 2:
                return "received"
                break;
            case 3:
                return "returned"
                break;
            case 4:
                return "canceled"
                break;

            default:
                break;
        }
    }

    return (
        <BackdropWrapper handleClick={toggle}>
            <div onClick={e => e.stopPropagation()} className="m-auto h-fit w-4/5 sm:w-3/5 md:1/2 lg:w-1/3 rounded-xl bg-gray-700 shadow-md p-5">
                <div className="flex justify-between items-center">
                    <span className='text-white text-2xl font-semibold'>Order Details</span>
                    <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                        <XIcon />
                    </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4">
                    <div className="w-full flex flex-col gap-y-4">
                        <h2 className="w-full pb-1 text-gray-400 text-md border-b-2 border-gray-600">Order Items</h2>
                        <div className="w-fit flex gap-2">
                            {order.items.map(item => (
                                <div key={item._id} className="relative w-16 h-16 px-1 bg-white flex justify-center items-center rounded-[5px]">
                                    <Image src={item.product.image} alt={item.product.name} width={100} height={50} />
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md flex justify-center items-center text-white bg-red-500 text-xs">x{item.quantity}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-4">
                        <h2 className="w-full pb-1 text-gray-400 text-md border-b-2 border-gray-600">Status</h2>
                        <div className="w-full grid grid-cols-2 gap-4">
                            <div className="col-span-1 bg-gray-600 p-3 rounded-xl flex flex-col gap-y-1">
                                <span className="text-sm text-gray-400">Shipment</span>
                                <span className="text-lg text-gray-300">{renderOrderStatus(order.status)}</span>
                            </div>
                            <div className="col-span-1 bg-gray-600 p-3 rounded-xl flex flex-col gap-y-1">
                                <span className="text-sm text-gray-400">Payment</span>
                                <span className="text-lg text-gray-300">{renderPaymentStatus(order.paymentStatus)}</span>
                            </div>

                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-4">
                        <h2 className="w-full pb-1 text-gray-400 text-md border-b-2 border-gray-600">Address</h2>
                        <div key={order.address._id} className='relative rounded-xl overflow-hidden col-span-1 bg-gray-600 flex'>

                            <div className='w-[20%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                                <span className='scale-[250%]'>
                                    <MapIcon />
                                </span>
                            </div>

                            <div className='w-[80%] p-3 text-gray-200 text-xl flex flex-col gap-y-2'>
                                <span>{order.address.firstLine}, {order.address.secondLine}</span>
                                <span>{order.address.zipCode}</span>
                                <span>{`United States, ${order.address.state}, ${order.address.city}`}</span>
                                <span>{`${order.address.recipient.firstName} ${order.address.recipient.lastName}, (${order.address.recipient.phoneNumber.substring(0, 3)}) ${order.address.recipient.phoneNumber.substring(3, 6)}-${order.address.recipient.phoneNumber.substring(6, order.address.recipient.phoneNumber.length)}`}</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-4">
                        <h2 className="w-full pb-1 text-gray-400 text-md border-b-2 border-gray-600">Prices</h2>
                        <ul className='flex flex-col gap-y-2 text-lg bg-gray-600 rounded-xl p-3'>
                            <li className='flex justify-between items-center'>
                                <span className='text-lg text-gray-200'>Subtotal</span>
                                <span className='text-md text-gray-100'>{payAmount + discountAmount} $</span>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='text-lg text-red-500'>Discount</span>
                                <span className='text-md text-red-500'>{discountAmount} $</span>
                            </li>
                            {discountCode && (
                                <li className='flex justify-between items-center'>
                                    <span className='text-lg text-red-500'>Discount Code</span>
                                    <span className='text-md text-red-500'>{discountCodeAmount} $</span>
                                </li>
                            )}
                            <li className='flex justify-between items-center'>
                                <span className='text-lg text-gray-200'>Estimated Shipping & Handling</span>
                                <span className='text-md text-gray-100'>{shippingAmount} $</span>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='text-lg text-gray-200'>Estimated Tax</span>
                                <span className='text-md text-gray-100'>{taxAmount} $</span>
                            </li>

                            <li className='text-lg mt-2 pt-2 border-t border-gray-500 flex justify-between items-center'>
                                <span className='text-2xl font-bold text-red-500'>Total</span>
                                <span className='text-2xl font-bold text-white'>{total - discountCodeAmount} $</span>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </BackdropWrapper>
    );
}

export default OrderDetailsModal;