import { useState } from "react";
import PencilIcon from "../ui/icons/PencilIcon";
import TrashIcon from "../ui/icons/TrashIcon";
import NewDiscountCodeModal from "../Modals/NewDiscountCodeModal";
import { handleDeleteDiscount, handleGetDiscounts, handlePostDiscount } from "../../helpers/api-helpers";
import { useQuery } from "react-query";
import { defaultOptions } from "../../lib/react-query/react-query";
import { getInputDateFormat } from "../../helpers/helpers";

function Discounts() {

    useQuery('discounts', handleGetDiscounts, {
        ...defaultOptions,
        onSuccess,
        onError
    })

    function onSuccess(data) {
        setDiscounts(data)
    }

    function onError(err) {
        console.log(err);
    }
    const [discounts, setDiscounts] = useState([])
    const [modalVis, setModalVis] = useState(false)
    function handleToggleModal() {
        setModalVis(prevState => !prevState)
    }



    async function handleCreateDiscount(inputs) {

        let result = await handlePostDiscount(inputs)

        if (result.status !== 201) return

        let data = await result.json()
        setDiscounts(prevState => [...prevState, data.discount])
        handleToggleModal()
    }


    async function handleRemoveDiscount(id) {

        let result = await handleDeleteDiscount(id)

        if (result.status !== 200) return

        setDiscounts(prevState => prevState.filter(discount => discount._id !== id))
    }

    return (
        <div className="w-full flex flex-col gap-y-2">

            <button onClick={handleToggleModal} className="rounded-xl w-fit ml-auto py-2 px-5 font-bold text-white text-xl bg-red-500">
                Add New Discount
            </button>
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="">
                    <tr>
                        <th scope="col" className="p-4 text-gray-400">
                            #
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Code
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Percentage
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Valid From
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Valid Until
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-400">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">

                    {discounts && discounts.map((discount, index) => (

                        <tr key={discount._id}>
                            <td className="p-4 w-4 text-white">
                                {index + 1}
                            </td>

                            <td className="py-4 px-6 text-sm font-medium text-gray-300 whitespace-nowrap">{discount.code}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-300 whitespace-nowrap">{discount.percentage}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-300 whitespace-nowrap">{getInputDateFormat(discount.validFrom)}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-300 whitespace-nowrap">{getInputDateFormat(discount.validUntil)}</td>

                            <td className="py-4 px-6 text-sm font-medium whitespace-nowrap">
                                {discount.status ? (
                                    <span className="rounded-md w-fit px-2 py-1 bg-emerald-50 text-emerald-600">Active</span>
                                ) : (
                                    <span className="rounded-md w-fit px-2 py-1 bg-red-50 text-red-600">not active</span>
                                )}
                            </td>
                            <td className="py-4 px-6 flex gap-x-2">
                                <button className="rounded-xl w-fit py-2 px-4 flex gap-x-1 items-center font-bold text-md bg-yellow-50 text-yellow-600">
                                    <span className="scale-[80%]">
                                        <PencilIcon />
                                    </span>
                                    <span>Edit</span>
                                </button>
                                <button onClick={() => handleRemoveDiscount(discount._id)} className="rounded-xl w-fit py-2 px-4 flex gap-x-1 items-center font-bold text-md bg-red-50 text-red-600">
                                    <span className="scale-[80%]">
                                        <TrashIcon />
                                    </span>
                                    <span>Remove</span>

                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            {modalVis && <NewDiscountCodeModal toggle={handleToggleModal} handleCreateNewDiscount={handleCreateDiscount} />}
        </div>
    );
}

export default Discounts;