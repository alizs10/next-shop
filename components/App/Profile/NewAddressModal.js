import XIcon from "../../ui/icons/XIcon";

function NewAddressModal({ toggle }) {
    
    
    return (
        <div className="center-win z-[9999] w-4/5 sm:w-3/5 md:1/2 lg:w-1/3 rounded-xl bg-gray-700 shadow-md p-5">
            <div className="flex justify-between items-center">
                <span className='text-white text-2xl font-semibold'>New Address</span>
                <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                    <XIcon />
                </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Country</label>
                    <input type="text" className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">State</label>
                    <input type="text" className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-2 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Address</label>
                    <input type="text" className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Zip Code</label>
                    <input type="text" className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Full Name</label>
                    <input type="text" className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Phone Number</label>
                    <input type="text" className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
            </div>

            <button className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Add Address</button>

        </div>
    );
}

export default NewAddressModal;