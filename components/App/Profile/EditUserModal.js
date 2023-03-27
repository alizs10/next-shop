import { signOut } from "next-auth/react";
import { useState } from "react";
import userStore from "../../../stores/user-store";
import XIcon from "../../ui/icons/XIcon";

function EditUserModal({ toggle }) {

    const { user, setUser } = userStore()

    let initialState = {
        fullName: user.fullName,
        email: user.email,
        phone: user.phone ?? "",
        birthday: user.birthday ?? "",
    }
    const [inputs, setInputs] = useState(initialState)

    function handleChangeInputs(e) {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    async function handleOnSubmit() {
        let result = await fetch('/api/profile', {
            method: "PUT",
            body: JSON.stringify(inputs),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await result.json()

        if (result.status === 200) {

            if (data.user.email !== user.email) {
                signOut({ callbackUrl: process.env.APP_URL })
                return
            }

            setUser(data.user)
            toggle()
        }
    }


    return (
        <div className="center-win z-[9999] w-4/5 sm:w-3/5 md:1/2 lg:w-1/3 rounded-xl bg-gray-700 shadow-md p-5">
            <div className="flex justify-between items-center">
                <span className='text-white text-2xl font-semibold'>Edit Profile Information</span>
                <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                    <XIcon />
                </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">FullName</label>
                    <input type="text" name="fullName" value={inputs.fullName} onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Email</label>
                    <input type="text" name="email" value={inputs.email} onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Birthday</label>
                    <input type="date" name="birthday" value={inputs.birthday} onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
                <div className="col-span-1 flex flex-col gap-y-1">
                    <label className="text-lg text-gray-200">Phone Number</label>
                    <input type="text" name="phone" value={inputs.phone} onChange={handleChangeInputs} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                </div>
            </div>

            <button onClick={handleOnSubmit} className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Update</button>

        </div>
    );
}

export default EditUserModal;