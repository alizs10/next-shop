import { useEffect, useReducer, useRef, useState } from "react";
import XIcon from "../../ui/icons/XIcon";
import userStore from '../../../stores/user-store';
import { BeatLoader } from 'react-spinners';

function AccountActivationModal({ toggle }) {

    const { user, setUser } = userStore()

    const initialState = {
        loading: false,
        isCodeSent: false,
        timer: 120
    }

    const [state, setState] = useState(initialState)
    const interval = useRef(null);

    async function handleSendCode() {
        if (state.loading) return

        setState(prevState => ({ ...prevState, loading: true, isCodeSent: false }))

        let result = await fetch('/api/profile/send-verification-code', {
            method: "POST"
        })

        let data = await result.json()
        if (result.status === 200) {
            setState(prevState => ({ ...prevState, loading: false, isCodeSent: true, timer: 120 }))
            interval.current = setInterval(() => {
                setState(prevState => ({ ...prevState, timer: prevState.timer - 1 }))
            }, 1000)
        } else {
            setState(prevState => ({ ...prevState, loading: false, isCodeSent: false }))
        }
    }

    useEffect(() => {

        if (state.timer === 0) {
            clearInterval(interval.current)
            interval.current = null;
        }

    }, [state.timer])

    async function handleActivateAcc() {
        let vCode = state.number1 + state.number2 + state.number3 + state.number4 + state.number5 + state.number6;
        if (state.loading || vCode.length !== 6) return

        setState(prevState => ({ ...prevState, loading: true }))


        let result = await fetch('/api/profile/activate-account', {
            method: "POST",
            body: JSON.stringify({ vCode }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        let data = await result.json()
        if (result.status === 200) {
            setState(initialState)
            setUser(data.user)
            toggle()
        } else {
            setState(prevState => ({ ...prevState, loading: false }))

        }

    }

    // verification code
    const vCodeRef0 = useRef(null)
    const vCodeRef1 = useRef(null)
    const vCodeRef2 = useRef(null)
    const vCodeRef3 = useRef(null)
    const vCodeRef4 = useRef(null)
    const vCodeRef5 = useRef(null)


    let vCodeInitialState = {
        number1: "",
        number2: "",
        number3: "",
        number4: "",
        number5: "",
        number6: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "change":
                if (action.payload.value.length < 2 && (action.payload.value.match(/[0-9]/g) && state[action.payload.key].length === 0) || action.payload.value === "") {
                    if (action.payload.value !== "") {
                        handleFocusOnInput(action.payload.key, "next")
                    }
                    return { ...state, [action.payload.key]: action.payload.value };
                }
                return state
                break;

            case "backspace":
                if (action.payload.keyCode === 8 && state[action.payload.key] === "") {
                    handleFocusOnInput(action.payload.key, "prev")
                }
                return state;
                break
            default:
                throw new Error();
        }
    };

    const [vCodeState, dispatch] = useReducer(reducer, vCodeInitialState)

    function handleFocusOnInput(inputKey, type) {
        switch (inputKey) {
            case "number1":
                if (type === "next") {
                    vCodeRef1.current.focus()
                }
                break;
            case "number2":
                if (type === "next") {
                    vCodeRef2.current.focus()
                }
                if (type === "prev") {
                    vCodeRef0.current.focus()
                }
                break;
            case "number3":
                if (type === "next") {
                    vCodeRef3.current.focus()
                }
                if (type === "prev") {
                    vCodeRef1.current.focus()
                }
                break;
            case "number4":
                if (type === "next") {
                    vCodeRef4.current.focus()
                }
                if (type === "prev") {
                    vCodeRef2.current.focus()
                }
                break;
            case "number5":
                if (type === "next") {
                    vCodeRef5.current.focus()
                }
                if (type === "prev") {
                    vCodeRef3.current.focus()
                }
                break;
            case "number6":
                if (type === "prev") {
                    vCodeRef4.current.focus()
                }
                break;

            default:
                break;
        }
    }


    return (
        <div className="center-win z-[9999] w-4/5 sm:w-3/5 md:1/2 lg:w-1/3 rounded-xl bg-gray-700 shadow-md p-5">
            <div className="flex justify-between items-center">
                <span className='text-white text-2xl font-semibold'>Account Activation</span>
                <span onClick={toggle} className="p-2 hover:bg-gray-800 cursor-pointer transition-all rounded-md duration-300 text-gray-200">
                    <XIcon />
                </span>
            </div>

            {state.isCodeSent ? (
                <>
                    <div className="flex flex-col text-gray-300">
                        <p>code is sent to your email address, didn't receive it?</p>
                        {state.timer === 0 ? (
                            <span onClick={handleSendCode} className="cursor-pointer text-blue-600 underline underline-offset-2">send again</span>
                        ) : (
                            <span>{state.timer} seconds wait to send again</span>
                        )}
                    </div>

                    <div className='mt-4 grid grid-cols-6 gap-x-2'>

                        <input type="text" autoFocus={true} className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                            name="number1"
                            onChange={e => dispatch({ type: "change", payload: { key: e.target.name, value: e.target.value } })}
                            value={vCodeState.number1}
                            onKeyDown={e => dispatch({ type: "backspace", payload: { keyCode: e.keyCode, key: "number1" } })}
                            ref={vCodeRef0}
                        />
                        <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                            name="number2"
                            onChange={e => dispatch({ type: "change", payload: { key: e.target.name, value: e.target.value } })}
                            value={vCodeState.number2}
                            onKeyDown={e => dispatch({ type: "backspace", payload: { keyCode: e.keyCode, key: "number2" } })}
                            ref={vCodeRef1}
                        />
                        <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                            name="number3"
                            onChange={e => dispatch({ type: "change", payload: { key: e.target.name, value: e.target.value } })}
                            value={vCodeState.number3}
                            onKeyDown={e => dispatch({ type: "backspace", payload: { keyCode: e.keyCode, key: "number3" } })}
                            ref={vCodeRef2}
                        />
                        <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                            name="number4"
                            onChange={e => dispatch({ type: "change", payload: { key: e.target.name, value: e.target.value } })}
                            value={vCodeState.number4}
                            onKeyDown={e => dispatch({ type: "backspace", payload: { keyCode: e.keyCode, key: "number4" } })}
                            ref={vCodeRef3}
                        />
                        <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                            name="number5"
                            onChange={e => dispatch({ type: "change", payload: { key: e.target.name, value: e.target.value } })}
                            value={vCodeState.number5}
                            onKeyDown={e => dispatch({ type: "backspace", payload: { keyCode: e.keyCode, key: "number5" } })}
                            ref={vCodeRef4}
                        />
                        <input type="text" className='col-span-1 aspect-square bg-gray-600 rounded-xl text-3xl text-white text-center p-2 focus:outline-none'
                            name="number6"
                            onChange={e => dispatch({ type: "change", payload: { key: e.target.name, value: e.target.value } })}
                            value={vCodeState.number6}
                            onKeyDown={e => dispatch({ type: "backspace", payload: { keyCode: e.keyCode, key: "number6" } })}
                            ref={vCodeRef5}
                        />

                    </div>
                    <button onClick={handleActivateAcc} disabled={state.loading} className="mt-4 rounded-xl bg-red-500 text-white font-bold text-lg w-full py-2">
                        <span>
                            {state.loading ? (<BeatLoader color="#fff" size={7} />) : "Active Account"}
                        </span>
                    </button>
                </>

            ) : (
                <>
                    <div className="mt-4 flex flex-col text-md text-white">
                        <p>you should receive a 6 digit code in your email to activate your account!</p>
                        <p>we will send you an email to {user.email}</p>
                    </div>
                    <button onClick={handleSendCode} disabled={state.loading} className={`mt-4 rounded-xl ${state.loading ? 'disabled' : 'bg-red-500'} text-white font-bold text-lg w-full py-2`}>
                        <span>
                            {state.loading ? (<BeatLoader color="#fff" size={7} />) : "Send Verification Code"}
                        </span>
                    </button>
                </>
            )}


        </div>
    );
}

export default AccountActivationModal;