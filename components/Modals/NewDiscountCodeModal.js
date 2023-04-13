import { useState } from "react";
import BackdropWrapper from "../Common/BackdropWrapper";
import Switch from "../Common/Switch";
import XIcon from "../ui/icons/XIcon";
import { getInputDateFormat } from '../../helpers/helpers';

function NewDiscountCodeModal({ toggle, handleCreateNewDiscount }) {

    let today = getInputDateFormat(Date.now());
    const initState = {
        code: "",
        percentage: 0,
        validFrom: today,
        validUntil: today,
        status: false,
    }

    console.log(today);
    const [states, setStates] = useState(initState)

    function handleChangeInput(e) {
        setStates(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }


    function handleToggleStatus(value) {
        handleChangeInput({ target: { name: "status", value } })
    }

    return (
        <BackdropWrapper handleClick={toggle}>
            <div
                onClick={e => e.stopPropagation()}
                className="w-1/3 flex flex-col gap-y-2 bg-gray-700 p-5 rounded-xl">

                <div className="flex justify-between items-center">
                    <span className='text-white text-2xl font-semibold'>New Discount</span>
                    <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                        <XIcon />
                    </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-y-1">
                        <label className="text-lg text-gray-200">Code</label>
                        <input type="text" name="code" value={states.code} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-y-1">
                        <label className="text-lg text-gray-200">Percentage</label>
                        <input type="text" name="percentage" value={states.percentage} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-y-1">
                        <label className="text-lg text-gray-200">Valid From</label>
                        <input type="date" name="validFrom" value={states.validFrom} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-y-1">
                        <label className="text-lg text-gray-200">Valid Until</label>
                        <input type="date" name="validUntil" value={states.validUntil} onChange={handleChangeInput} className="outline-none text-lg rounded-xl px-3 py-2 text-gray-200 bg-gray-600" />
                    </div>
                    <div className="col-span-1 flex justify-between items-center gap-y-1">
                        <label className="text-lg text-gray-200">Status</label>
                        <Switch handleChange={handleToggleStatus} value={states.status} />
                    </div>

                </div>

                <button onClick={() => handleCreateNewDiscount(states)} className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Create</button>

            </div>
        </BackdropWrapper>
    );
}

export default NewDiscountCodeModal;