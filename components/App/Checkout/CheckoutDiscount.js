function CheckoutDiscount() {
    return (
        <div className="mt-20 w-full flex flex-col gap-y-2">
            <h2 className="text-xl font-bold text-gray-400 pb-4 w-full border-b-2 border-gray-500">
                You Have a discount code?
            </h2>

            <div className="mt-2 grid grid-cols-10 gap-x-2">
                <input type="text" name="discount" className="col-span-9 outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                <button className="col-span-1 bg-red-500 rounded-xl py-2 text-center text-lg text-gray-200">Check</button>
            </div>
        </div>
    );
}

export default CheckoutDiscount;