import { useRef } from "react";

function CheckoutDiscount({ order, handleCheckDiscountCode,handleRemoveDiscountCode }) {

    const codeInp = useRef(null)
    async function handleCheck() {
        let res = await handleCheckDiscountCode(codeInp.current.value)
        
        if (res && codeInp.current) {
            codeInp.current.value = "";
        }
    }

    return (
        <div className="mt-20 w-full flex flex-col gap-y-2">
            <h2 className="text-xl font-bold text-gray-400 pb-4 w-full border-b-2 border-gray-500">
                You Have a discount code?
            </h2>

            <div className="mt-2 grid grid-cols-10 gap-x-2">
                <input ref={codeInp} type="text" name="discount" className="col-span-9 outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                <button onClick={handleCheck} className="col-span-1 bg-red-500 rounded-xl py-2 text-center text-lg text-gray-200">Check</button>
            </div>

            {order.discountCode && (

                <div className="mt-4 cursor-pointer p-3 bg-gray-700 rounded-xl flex justify-between items-center">
                    <div className="text-gray-300 text-xl font-bold">
                        Activated Code: '{order.discountCode.code}' - {order.discountCode.percentage}%
                    </div>
                    <span onClick={handleRemoveDiscountCode} className="rounded-md py-1 px-2 text-red-500 text-md bg-red-100">remove</span>
                </div>
            )}
        </div>
    );
}

export default CheckoutDiscount;