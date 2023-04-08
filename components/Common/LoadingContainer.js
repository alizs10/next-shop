import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import ExclamationCircleIcon from "../../components/ui/icons/ExclamationCircleIcon";
import CheckCircleIcon from "../../components/ui/icons/CheckCircleIcon";
import {  MoonLoader } from "react-spinners";

function LoadingContainer() {

    const { loadingText, loading, response, progress } = useContext(LoadingContext)
    const [dots, setDots] = useState("")


    useEffect(() => {

        if (!loading) return

        let interval = setInterval(() => {
            setDots(prevState => {

                if (prevState.length < 3) {
                    return prevState + "."
                } else {
                    return ""
                }
            })
        }, 300)

        return () => clearInterval(interval)
    }, [loading])

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-[99999] flex justify-center items-center">
            <div className="relative overflow-hidden min-w-[250px] pt-12 flex flex-col shadow-2xl gap-y-8 bg-slate-700 px-10 pb-8 rounded-3xl">

                {response && (
                    <span style={{ width: `${progress}%` }} className={`absolute transition-all top-0 left-0 h-2 ${response.status === "success" ? "bg-emerald-500" : "bg-red-500"}`}></span>
                )}

                {loading && !response && (
                    <span className="mx-auto">
                        <MoonLoader color="#2563eb" size={35} />
                    </span>
                )}

                {response && response.status === "success" && (
                    <span className="text-emerald-500 mx-auto scale-[300%]">
                        <CheckCircleIcon />
                    </span>
                )}


                {response && response.status === "error" && (
                    <span className="text-red-500 mx-auto scale-[300%]">
                        <ExclamationCircleIcon />
                    </span>
                )}

                <div className="flex flex-nowrap gap-x-1 text-white text-2xl">
                    {(loading && !response) && (
                        <>
                            <p className="w-full text-center">{loadingText}</p>
                            <span className="flex w-[20px]">{dots}</span>
                        </>
                    )}
                    {response && (
                        <p className="w-full text-center">{response.text}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoadingContainer;