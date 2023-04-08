import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

import LoadingContainer from '../components/Common/LoadingContainer';

export const LoadingContext = createContext({
    loading: false,
    setLoading: () => { }
})

export const LoadingProvider = ({ children }) => {

    const [loadingText, setLoadingText] = useState("loading")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [progress, setProgress] = useState(100)

    function addLoading(text) {
        setLoadingText(text)
        setLoading(true)
    }

    function closeLoading(res = null) {

        if (!res) {
            setResponse(null)
            setLoadingText("loading")
            setLoading(false)
            setProgress(100)
        } else {
            setResponse(res)
        }

    }

    const router = useRouter()

    useEffect(() => {

        router.events.on('routeChangeStart', routeChangeStart)
        router.events.on('routeChangeComplete', routeChangeEnd)
        router.events.on('routeChangeError', routeChangeError)

    }, [])

    function routeChangeStart() {
        addLoading("redirecting")
    }

    function routeChangeEnd() {
        closeLoading()
    }

    function routeChangeError() {
        closeLoading({ text: "something went wrong!", status: "error" })
    }

    useEffect(() => {

        if (!response) return

        let timeout = setTimeout(() => {
            closeLoading()
            if(response.redirect)
            {
                router.replace(response.redirect)
            }
        }, 3000)


        let minus = 100 * 100 / 3000;
        let interval = setInterval(() => {

            setProgress(prevState => {
                let finalValue = prevState - minus < 0 ? 0 : prevState - minus;
                return finalValue;
            })

        }, [100])

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }

    }, [response])



    const values = {
        loadingText, setLoadingText,
        loading, setLoading,
        addLoading,
        closeLoading,
        response,
        progress
    }
    return (
        <LoadingContext.Provider value={values}>
            {children}
            {loading && (
                <LoadingContainer />
            )}
        </LoadingContext.Provider>
    );
}

