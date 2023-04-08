import CreditCartIcon from "../../ui/icons/CreditCartIcon";

function CheckoutGateway({ isGatewaySelected, handleSelectGateway }) {
    return (
        <div className="mt-20 w-full flex flex-col gap-y-2">
            <h2 className="text-xl font-bold text-gray-400 pb-4 w-full border-b-2 border-gray-500">
                Choose Gateway to pay
            </h2>
            <div className='mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4'>

                <div onClick={handleSelectGateway} className='relative cursor-pointer rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex flex-col'>

                    <div className='w-full text-white bg-red-500 flex justify-center items-center py-8'>
                        <span className='text-white scale-[250%]'>
                            <CreditCartIcon />
                        </span>
                    </div>

                    <div className={`${isGatewaySelected ? 'bg-red-500' : ''} transition-all duration-300 w-full p-3 text-gray-200 text-xl flex flex-col gap-y-2`}>
                        <span className="text-xl font-bold w-full text-center">Fake Nike Shop Gateway</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CheckoutGateway;