import { useQuery } from "react-query";
import CheckoutPaymentDetails from "./CheckoutPaymentDetails";
import { useContext, useEffect, useState } from "react";
import { handleGetPayment } from "../../../helpers/api-helpers";
import { defaultOptions } from "../../../lib/react-query/react-query";
import Stepper from "../../Common/Stepper";
import { LoadingContext } from '../../../context/LoadingContext';

function CheckoutTransaction({ transactionId }) {

    const { addLoading, closeLoading } = useContext(LoadingContext)

    useEffect(() => {

        addLoading("checking payment")

    }, [])

    useEffect(() => {

        if (!transactionId) {
            closeLoading({ text: "Transaction Required!", status: "error", redirect: "/" })
        }

    }, [transactionId])

    const steps = [
        {
            name: "Delivery",
            isPassed: true
        },
        {
            name: "Payment",
            isPassed: true
        },
        {
            name: "Final",
            isPassed: true
        }
    ]

    const [errorObj, setErrorObj] = useState({
        isError: false,
        errorMessage: ""
    })

    const { data: payment, isLoading: isPaymentLoading } = useQuery(
        ['payment', transactionId],
        ({ queryKey }) => handleGetPayment(queryKey[1]),
        {
            ...defaultOptions,
            enabled: !!transactionId,
            onError,
            onSuccess
        })


    function onError(error) {
        let errorMessage = error.response.data.message;
        setErrorObj({ isError: true, errorMessage })
        closeLoading({ text: errorMessage, status: "error", redirect: "/" })
    }

    function onSuccess() {
        closeLoading()
    }

    return payment && (
        <div className="p-20">
            <Stepper steps={steps} />
            <CheckoutPaymentDetails payment={payment} />
        </div>
    );
}

export default CheckoutTransaction;