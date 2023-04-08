import MapIcon from "../../ui/icons/MapIcon";
import PlusIcon from "../../ui/icons/PlusIcon";
import { NoAddresses } from "../Profile/Addresses";
import NewAddressModal from "../Profile/NewAddressModal";

function CheckoutAddress({ addresses, newAddressVis, toggleNewAddressModal, handleAddNewAddress, handleSelectAddress, isAddressSelected }) {

    console.log(addresses);

    return (
        <div className="relative mt-20 flex flex-col gap-y-2">
            <div className="flex justify-between items-end pb-4 border-b-2 border-gray-400">
                <h2 className="text-2xl font-bold text-gray-300">Select Address</h2>
                <button onClick={toggleNewAddressModal} className="px-3 py-2 flex flex-nowrap gap-x-1 rounded-xl bg-red-500 text-white text-md">
                    <PlusIcon />
                    <span>Add New Address</span>
                </button>
            </div>

            {addresses.length === 0 ? (<NoAddresses />) : (

                <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    {addresses.map(item => (
                        <div key={item._id} onClick={() => handleSelectAddress(item._id)} className='relative rounded-xl overflow-hidden col-span-1 shadow-md bg-gray-700 flex'>

                            <div className='w-[20%] text-white bg-red-500 flex justify-center items-center aspect-square'>
                                <span className='scale-[250%]'>
                                    <MapIcon />
                                </span>
                            </div>

                            <div className={`${isAddressSelected(item._id) ? 'bg-red-400' : ''} w-[80%] p-3 text-gray-200 text-xl flex flex-col gap-y-2`}>
                                <span>{item.firstLine}, {item.secondLine}</span>
                                <span>{item.zipCode}</span>
                                <span>{`United States, ${item.state}, ${item.city}`}</span>
                                <span>{`${item.recipient.firstName} ${item.recipient.lastName}, (${item.recipient.phoneNumber.substring(0, 3)}) ${item.recipient.phoneNumber.substring(3, 6)}-${item.recipient.phoneNumber.substring(6, item.recipient.phoneNumber.length)}`}</span>
                                <span></span>
                            </div>
                        </div>
                    ))}

                </div>
            )}

            {newAddressVis && (<NewAddressModal toggle={toggleNewAddressModal} handleAddNewAddress={handleAddNewAddress} />)}

        </div>
    );
}

export default CheckoutAddress;