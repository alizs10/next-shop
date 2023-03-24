import { useRef, useState } from "react";
import XIcon from "../../ui/icons/XIcon";

function AccountActivationModal({ toggle }) {

    const [vCodeArr, setVCodeArr] = useState(["", "", "", "", "", ""])
    const [update, setUpdate] = useState(false)
    
    const handleVerificationCode = (e, position) => {

        let value = e.target.value;

        if (value.match(/[0-9]/g) || value === "") {
            if (value.length > 1 && position == 0) {
                let arrValue = value.split("")
                let arr = vCodeArr;
                arrValue.map((number, index) => {
                    if (index < 6) {
                        arr[index] = number
                        let next = index + 1;
                        if (next < 6) {
                            handleFocusOnInput(next)
                        }
                    }
                })
                setVCodeArr(arr)
                setUpdate(!update)
            } else {
                if (value.length > 1) return

                let arr = vCodeArr;
                arr[position] = value;
                setVCodeArr(arr)
                setUpdate(!update)

                if (value !== "" && position != 5) {
                    let next = position + 1
                    handleFocusOnInput(next)

                }
            }
        }
    }

    const handleOnKeyDown = (e, position) => {
        if (e.keyCode == 8 && vCodeArr[position] === "") {
            let prev = position - 1;
            handleFocusOnInput(prev.toString())
        }
    }

    const handleFocusOnInput = (position) => {

        switch (position.toString()) {
            case "0":
                vcodeRef0.current.focus()
                break;
            case "1":
                vcodeRef1.current.focus()
                break;
            case "2":
                vcodeRef2.current.focus()
                break;
            case "3":
                vcodeRef3.current.focus()
                break;
            case "4":
                vcodeRef4.current.focus()
                break;
            case "5":
                vcodeRef5.current.focus()
                break;

            default:
                break;
        }
    }

    const vcodeRef0 = useRef(null)
    const vcodeRef1 = useRef(null)
    const vcodeRef2 = useRef(null)
    const vcodeRef3 = useRef(null)
    const vcodeRef4 = useRef(null)
    const vcodeRef5 = useRef(null)



    return (
        <div className="center-win z-[9999] w-4/5 sm:w-3/5 md:1/2 lg:w-1/3 rounded-xl bg-gray-700 shadow-md p-5">
            <div className="flex justify-between items-center">
                <span className='text-white text-2xl font-semibold'>Account Activation</span>
                <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                    <XIcon />
                </span>
            </div>
            <div className='mt-4 grid grid-cols-6 gap-x-2'>

                <input type="text" autoFocus={true} className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                    onChange={e => handleVerificationCode(e, 0)}
                    onKeyDown={e => handleOnKeyDown(e, 0)}

                    value={vCodeArr[0]}
                    ref={vcodeRef0}
                />
                <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                    onChange={e => handleVerificationCode(e, 1)}
                    onKeyDown={e => handleOnKeyDown(e, 1)}
                    value={vCodeArr[1]}
                    ref={vcodeRef1}
                />
                <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                    onChange={e => handleVerificationCode(e, 2)}
                    onKeyDown={e => handleOnKeyDown(e, 2)}
                    value={vCodeArr[2]}
                    ref={vcodeRef2}
                />
                <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                    onChange={e => handleVerificationCode(e, 3)}
                    onKeyDown={e => handleOnKeyDown(e, 3)}
                    value={vCodeArr[3]}
                    ref={vcodeRef3}
                />
                <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                    onChange={e => handleVerificationCode(e, 4)}
                    onKeyDown={e => handleOnKeyDown(e, 4)}
                    value={vCodeArr[4]}
                    ref={vcodeRef4}
                />
                <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                    onChange={e => handleVerificationCode(e, 5)}
                    onKeyDown={e => handleOnKeyDown(e, 5)}
                    value={vCodeArr[5]}
                    ref={vcodeRef5}
                />
                
            </div>

            <button className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">Active Account</button>

        </div>
    );
}

export default AccountActivationModal;