import { useState } from "react";
import XIcon from "../../ui/icons/XIcon";

function NewAddressModal({ toggle, handleAddNewAddress }) {

    let initialState = {
        state: "",
        city: "",
        firstLine: "",
        secondLine: "",
        zipCode: "",
        recipient: {
            firstName: "",
            lastName: "",
            phoneNumber: ""
        },
    }
    const [inputs, setInputs] = useState(initialState)

    function handleChangeInput(e) {

        if (['firstName', 'lastName', 'phoneNumber'].includes(e.target.name)) {
            setInputs(prevState => ({ ...prevState, recipient: { ...prevState.recipient, [e.target.name]: e.target.value } }))
        } else {
            setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
        }

    }

    async function handleSubmitForm() {

        let result = await fetch('/api/profile/addresses', {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await result.json()

        if (result.status === 200) {
            setInputs(initialState)
            handleAddNewAddress(data.address)
        }
    }

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
                    <input type="text" value="United States" readOnly className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">State</label>
                    <input type="text" name="state" value={inputs.state} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">City</label>
                    <input type="text" name="city" value={inputs.city} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-2 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Street Address</label>
                    <input type="text" name="firstLine" value={inputs.firstLine} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-2 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Apartment Address</label>
                    <input type="text" name="secondLine" value={inputs.secondLine} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Zip Code</label>
                    <input type="text" name="zipCode" value={inputs.zipCode} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-2 text-xl text-gray-100 font-bold">
                    Recipient Information
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">First Name</label>
                    <input type="text" name="firstName" onChange={handleChangeInput} value={inputs.recipient.firstName} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Last Name</label>
                    <input type="text" name="lastName" onChange={handleChangeInput} value={inputs.recipient.lastName} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={handleChangeInput} value={inputs.recipient.phoneNumber} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
            </div>

            <button onClick={handleSubmitForm} className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Add Address</button>

        </div>
    );
}

export default NewAddressModal;