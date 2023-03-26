import { useState } from "react";
import XIcon from "../../ui/icons/XIcon";

function ChangePasswordModal({ toggle }) {

    let initialState = {
        currentPassword: "",
        newPassword: "",
        newPasswordConfirmation: "",
    }
    const [inputs, setInputs] = useState(initialState)

    function handleChangeInputs(e) {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    async function handleSubmitForm() {

        let result = await fetch('/api/profile/change-password', {
            method: "PUT",
            body: JSON.stringify(inputs),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await result.json()

        if (result.status === 200) {
            console.log(data.message);
            toggle()
        }
    }


    return (
        <div className="center-win z-[9999] w-4/5 sm:w-3/5 md:1/2 lg:w-1/3 rounded-xl bg-gray-700 shadow-md p-5">
            <div className="flex justify-between items-center">
                <span className='text-white text-2xl font-semibold'>Change Password</span>
                <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                    <XIcon />
                </span>
            </div>

            <div className="mt-8 flex flex-col gap-4">
                <div className="w-full flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Current Password</label>
                    <input type="password" value={inputs.currentPassword} name="currentPassword" onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="w-full flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">New Password</label>
                    <input type="password" value={inputs.newPassword} name="newPassword" onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="w-full flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">New Password Confirmation</label>
                    <input type="password" value={inputs.newPasswordConfirmation} name="newPasswordConfirmation" onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
            </div>

            <button onClick={handleSubmitForm} className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Change Password</button>

        </div>
    );
}

export default ChangePasswordModal;