import ClockIcon from "../../ui/icons/ClockIcon";
import TruckBoltIcon from "../../ui/icons/TruckBoltIcon";
import TruckFastIcon from "../../ui/icons/TruckFastIcon";
import TruckIcon from "../../ui/icons/TruckIcon";


function CheckoutDelivery({ deliveryMethods, handleSelectDelivery, isDeliverySelected }) {

    console.log(deliveryMethods);

    return (
        <div className="relative mt-20 flex flex-col gap-y-2">
            <div className="flex justify-between items-end pb-4 border-b-2 border-gray-400">
                <h2 className="text-2xl font-bold text-gray-300">Select Delivery</h2>

            </div>

            <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>

                {deliveryMethods.map((method, index) => (
                    <div key={method._id} onClick={() => handleSelectDelivery(method._id)} className='relative cursor-pointer rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex'>

                        <div className='w-[30%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                            <span className='fill-white scale-[250%]'>
                                {index === 0 && (<TruckIcon />)}
                                {index === 1 && (<TruckFastIcon />)}
                                {index === 2 && (<TruckBoltIcon />)}
                            </span>
                        </div>

                        <div className={`${isDeliverySelected(method._id) ? 'bg-red-400' : ''} transition-all duration-300 w-[70%] p-3 text-gray-200 text-xl flex flex-col gap-y-2`}>
                            <span className="text-2xl font-bold">{method.name}</span>
                            <span className="text-lg flex gap-x-2">
                                <span><ClockIcon /></span>
                                <span>{method.time}</span>
                            </span>

                            <span className="font-bold text-md">{method.price === 0 ? 'free' : `$ ${method.price}`}</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default CheckoutDelivery;