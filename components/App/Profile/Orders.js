import Image from "next/image";
import CreditCartIcon from "../../ui/icons/CreditCartIcon";
import XIcon from "../../ui/icons/XIcon";
import InformationCircleIcon from "../../ui/icons/InformationCircleIcon";
import ArrowUpRightIcon from "../../ui/icons/ArrowUpRightIcon";
import { useRouter } from "next/router";
import { useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import { renderPaymentStatus } from "./Payments";

function Orders({ orders: initOrders }) {

    const [orders, setOrders] = useState(initOrders)

    function updateOrder(orderId, updatedValues) {
        setOrders(prevState => {
            let ordersIns = [...prevState]
            let orderIndex = ordersIns.findIndex(order => order._id === orderId)
            ordersIns[orderIndex] = { ...ordersIns[orderIndex], ...updatedValues }
            return ordersIns;
        })
    }

    

    function renderActions(order) {

        if (order.paymentStatus === '1') {
            return (<button onClick={() => toggleModal(order)} className="flex items-center gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(37,99,235)] hover:shadow-[0_7px_15px_5px_rgb(37,99,235)] bg-blue-600 text-white">
                <InformationCircleIcon />
                <span>More Details</span>
            </button>)
        }

        // check if order is incomplete and not canceled
        if (order.status !== '4' && !order.delivery && !order.address) {
            return (
                <div className="flex gap-x-2">
                    <button onClick={() => handleContinue(order)} className="flex items-center gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(124,58,237)] hover:shadow-[0_7px_15px_5px_rgb(124,58,237)] bg-violet-600 text-white">
                        <ArrowUpRightIcon />
                        <span>Continue</span>
                    </button>
                    <button onClick={() => handleCancel(order)} className="flex items-center gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(239,68,68)] hover:shadow-[0_7px_15px_5px_rgb(239,68,68)] bg-red-500 text-white">
                        <XIcon />
                        <span>Cancel</span>
                    </button>
                </div>
            )
        }

        if (order.status !== '4' && !!order.delivery && !!order.address) {
            return (
                <div className="flex gap-x-2">
                    <button onClick={() => handleContinue(order)} className="flex items-center gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(5,150,105)] hover:shadow-[0_7px_15px_5px_rgb(5,150,105)] bg-emerald-600 text-white">
                        <CreditCartIcon />
                        <span>Pay Now</span>
                    </button>
                    <button onClick={() => handleCancel(order)} className="flex items-center gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(239,68,68)] hover:shadow-[0_7px_15px_5px_rgb(239,68,68)] bg-red-500 text-white">
                        <XIcon />
                        <span>Cancel</span>
                    </button>
                </div>
            )
        }

        if (order.status === '4') {
            return (
                <span className="rounded-md w-fit px-2 py-1 bg-gray-500 text-gray-200">no action</span>
            )
        }
    }

    const router = useRouter()

    function handleContinue(order) {
        
        router.push('/checkout/' + order._id)
    }

    async function handleCancel(order) {
        let result = await fetch(`/api/orders/${order._id}/cancel`, {
            method: "PUT"
        })
        if (result.status !== 200) return

        let data = await result.json()
        updateOrder(order._id, { status: 4, paymentStatus: 2 })
    }

    const [orderDetails, setOrderDetails] = useState(null)
    const [modalVis, setModalVis] = useState(false)

    function toggleModal(order = null) {
        if (order) {
            setOrderDetails(order)
        } else {
            setOrderDetails(null)
        }
        setModalVis(prevState => !prevState)
    }


    return (
        <>
            <div className="mt-8 p-3">

                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="">
                        <tr>
                            <th scope="col" className="p-4 text-gray-400">
                                #
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                Items
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                Pay Price
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                Payment Status
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">

                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td className="p-4 w-4 text-white">
                                    {index + 1}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="w-fit flex gap-2">
                                            {order.items.map(item => (
                                                <div key={item._id} className="relative w-12 h-12 px-1 bg-white flex justify-center items-center rounded-[5px]">
                                                    <Image src={item.product.image} alt={item.product.name} width={100} height={50} />
                                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md flex justify-center items-center text-white bg-red-500 text-xs">x{item.quantity}</span>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">{order.delivery ? `$ ${order.payAmount + order.tax + order.delivery.price}` : "-"}</td>

                                <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                                    {renderPaymentStatus(order.paymentStatus)}
                                </td>
                                <td className="py-4 px-6 flex gap-x-2 text-sm font-medium text-right whitespace-nowrap">
                                    {renderActions(order)}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>


            </div>
            {modalVis && <OrderDetailsModal toggle={toggleModal} order={orderDetails} />}
        </>
    );
}

export default Orders;