function CheckoutSummary({order}) {

    let payAmount = order.payAmount;
    let discountAmount = order.discountAmount;
    let shippingAmount = order.delivery?.price ?? 0;
    let taxAmount = order.tax;

    return (
        <div className="mt-20 w-full flex flex-col gap-y-2">
            <h2 className="text-xl font-bold text-gray-400 pb-4 w-full border-b-2 border-gray-500">
            Summary
            </h2>
            <div className='col-span-2'>

                <ul className='mt-2 flex flex-col gap-y-2 text-lg'>
                    <li className='flex justify-between items-center'>
                        <span className='text-lg text-gray-200'>Subtotal</span>
                        <span className='text-md text-gray-100'>{payAmount + discountAmount} $</span>
                    </li>
                    <li className='flex justify-between items-center'>
                        <span className='text-lg text-red-500'>Discount</span>
                        <span className='text-md text-red-500'>{discountAmount} $</span>
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

            </div>

        </div>
    );
}

export default CheckoutSummary;