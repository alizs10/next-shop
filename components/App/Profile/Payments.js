import Image from "next/image";
import CopyIcon from "../../ui/icons/CopyIcon";
import PlusIcon from "../../ui/icons/PlusIcon";
import { formatDate } from "../../../helpers/helpers";
import { useRef, useState } from "react";
import OrderDetailsModal from "./OrderDetailsModal";
import ClipboardDocumentCheckIcon from "../../ui/icons/ClipboardDocumentCheckIcon";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion'

function NoPayments() {

    return (
        <div className="pt-24 w-full flex flex-col justify-center items-center gap-y-4 text-gray-400">

            <span className="font-bold text-4xl">You Have no Payments</span>
            {/* <span className="text-2xl">Add your first favorite shoe...</span> */}

        </div>
    )
}

export function renderPaymentStatus(status) {
    if (typeof status === 'string') {
        status = parseInt(status)
    }

    switch (status) {
        case null:
            return <span className="self-start rounded-md w-fit px-2 py-1 bg-gray-50 text-gray-500">waiting</span>
            break;
        case 0:
            return <span className="self-start rounded-md w-fit px-2 py-1 bg-red-50 text-red-500">unsuccessful</span>
            break;
        case 1:
            return <span className="self-start rounded-md w-fit px-2 py-1 bg-emerald-50 text-emerald-600">paid</span>
            break;
        case 2:
            return <span className="self-start rounded-md w-fit px-2 py-1 bg-yellow-50 text-yellow-500">canceled</span>
            break;

        default:
            return <span className="self-start rounded-md w-fit px-2 py-1 bg-gray-50 text-gray-500">waiting</span>
            break;
    }
}


function Payments({ payments }) {

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

    const [copyStatus, setCopyStatus] = useState({ status: false, key: null })

    const timeout = useRef(null)

    async function copyTransaction(text, paymentId) {
        if (timeout.current) {
            clearTimeout(timeout.current)
            setCopyStatus({ status: false, key: null })
        }

        navigator.clipboard.writeText(text).then(function () {
            setCopyStatus({ status: true, key: paymentId })
            timeout.current = setTimeout(() => {
                setCopyStatus({ status: false, key: null })
            }, 5000)
        }, function (err) {
            setCopyStatus({ status: false, key: null })
            console.error('Async: Could not copy text: ', err);
        });

    }

    return (
        <div className="mt-8 p-3">

            {payments.length > 0 ? (
                <>
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="">
                            <tr>
                                <th scope="col" className="p-4 text-gray-400">
                                    #
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                    Date
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                    Amount
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                    Order
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                    Status
                                </th>

                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                                    Transaction
                                </th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">

                            {payments.map((payment, index) => (
                                <tr key={payment._id}>
                                    <td className="p-4 w-4 text-white">
                                        {index + 1}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{formatDate(new Date(payment.paymentDate))}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">$ {payment.amount}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="w-full flex justify-between items-center">
                                            <div className="w-fit flex flex-nowrap gap-[4px]">
                                                {payment.order.items.map((item, index) => {
                                                    return index < 3 && (
                                                        <div key={item._id} className="relative w-12 h-12 px-1 bg-white flex justify-center items-center rounded-[5px]">
                                                            <Image src={item.product.image} alt={item.product.name} width={100} height={50} />
                                                            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md flex justify-center items-center text-white bg-red-500 text-xs">x{item.quantity}</span>
                                                        </div>
                                                    )
                                                })}

                                                {payment.order.items.length > 3 && (
                                                    <div className="w-10 h-10 text-gray-300 flex justify-center items-center">
                                                        <PlusIcon />
                                                    </div>
                                                )}

                                            </div>

                                            <span onClick={() => toggleModal(payment.order)} className="cursor-pointer self-end text-md text-red-500 underline underline-offset-2">order details</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                                        {renderPaymentStatus(payment.status)}
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                        <button onClick={() => copyTransaction(payment._id, payment._id)} className="flex gap-x-2 px-3 py-2 w-fit rounded-xl text-lg transition-all duration-300 shadow-[0_5px_15px_0px_rgb(239,68,68)] hover:shadow-[0_7px_15px_5px_rgb(239,68,68)] bg-red-500 text-white">

                                            <AnimatePresence mode="wait" initial={false}>

                                                {copyStatus.status && copyStatus.key === payment._id ? (
                                                    <motion.span key={0}
                                                        initial={{ opacity: 0, y: 0 }}
                                                        animate={{ opacity: 1, y: [-10, 0] }}
                                                        exit={{ opacity: 0, y: [0, 10] }}
                                                        transition={{ duration: "0.3" }}
                                                        className="scale-90">
                                                        <ClipboardDocumentCheckIcon />
                                                    </motion.span>

                                                ) : (
                                                    <motion.span key={1}
                                                        initial={{ opacity: 0, y: 0 }}
                                                        animate={{ opacity: 1, y: [-10, 0] }}
                                                        exit={{ opacity: 0, y: [0, 10] }}
                                                        transition={{ duration: "0.3" }}
                                                        className="scale-90">
                                                        <CopyIcon />
                                                    </motion.span>
                                                )}

                                            </AnimatePresence>

                                            <span>{payment._id}</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                    {modalVis && <OrderDetailsModal toggle={toggleModal} order={orderDetails} />}
                </>
            ) : (<NoPayments />)}

        </div>
    );
}

export default Payments;