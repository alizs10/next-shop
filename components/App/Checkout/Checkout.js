import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { handleGetDeliveryMethods, handleGetOrder, handleGetPayment, handleGetUserAddresses, handleUpdateOrder } from "../../../helpers/api-helpers";
import Stepper from "../../Common/Stepper";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutDiscount from "./CheckoutDiscount";
import CheckoutGateway from "./CheckoutGateway";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutPaymentDetails from "./CheckoutPaymentDetails";
import { useQuery, useQueryClient } from "react-query";
import { defaultOptions } from "../../../lib/react-query/react-query";

function Checkout({ orderId, transactionId }) {

    const router = useRouter()
    const queryClient = useQueryClient();

    const [loading, setLoading] = useState(true)
    const [errorObj, setErrorObj] = useState({
        isError: false,
        errorMessage: ""
    })
    const [shouldGetDeliveryStepInitData, setShouldGetDeliveryStepInitData] = useState(false)

    const { data: order, isLoading } = useQuery(
        ['order', orderId],
        ({ queryKey }) => handleGetOrder(queryKey[1]),
        {
            ...defaultOptions,
            onError
        })
    

    function onError(error) {
        let errorMessage = error.response.data.message;
        console.log("this is on error", errorMessage);
        setErrorObj({ isError: true, errorMessage })
        setLoading(false)
    }

    useEffect(() => {

        if ((order && !isLoading)) {
            prepareStep(order)
        }
    }, [order])

    const [steps, setSteps] = useState([
        {
            name: "Delivery",
            isPassed: true
        },
        {
            name: "Payment",
            isPassed: false
        },
        {
            name: "Final",
            isPassed: false
        },
    ])

    async function prepareStep(order) {

        if (!order) return
        setLoading(true)

        let deliveryStep = {
            "name": "Delivery",
            isPassed: false
        }
        let paymentStep = {
            "name": "Payment",
            isPassed: false
        }
        let finalStep = {
            "name": "Final",
            isPassed: false
        }

        if (order.address !== null && order.delivery !== null) {
            deliveryStep.isPassed = true;
        } else {
            setShouldGetDeliveryStepInitData(true)
        }


        if (order.payment) {
            paymentStep.isPassed = true;
        }

        if (deliveryStep.isPassed && paymentStep.isPassed) {
            finalStep.isPassed = true;
        }

        let stepsArr = [deliveryStep, paymentStep, finalStep]
        setSteps(stepsArr)
        setLoading(false)
    }

    const { data: addresses } = useQuery('addresses', () => handleGetUserAddresses(), { ...defaultOptions, enabled: shouldGetDeliveryStepInitData })
    const { data: deliveryMethods } = useQuery('deliveryMethods', () => handleGetDeliveryMethods(), { ...defaultOptions, enabled: shouldGetDeliveryStepInitData })

    const [selectedAddress, setSelectedAddress] = useState(null)
    const [selectedDelivery, setSelectedDelivery] = useState(null)
    const [isGatewaySelected, setIsSelectedGateway] = useState(false)
    const [allowedNext, setAllowedNext] = useState(selectedAddress && selectedDelivery ? true : false)

    useEffect(() => {

        if ((selectedAddress && selectedDelivery) || isGatewaySelected) {
            setAllowedNext(true)
        } else {
            setAllowedNext(false)
        }

    }, [selectedAddress, selectedDelivery, isGatewaySelected])


    function handleSelectAddress(addressId) {
        setSelectedAddress(addressId)
    }
    function isAddressSelected(addressId) {
        return selectedAddress === addressId;
    }

    function handleSelectDelivery(deliveryId) {
        setSelectedDelivery(deliveryId)
    }
    function isDeliverySelected(deliveryId) {
        return deliveryId && selectedDelivery === deliveryId;
    }

    function handleSelectGateway() {
        setIsSelectedGateway(true)
    }

    const [newAddressVis, setNewAddressVis] = useState(false)

    function toggleNewAddressModal() {
        setNewAddressVis(prevState => !prevState)
    }

    function handleAddNewAddress(newAddress) {
        queryClient.invalidateQueries('addresses');
        toggleNewAddressModal()
    }
    async function handleGoNext() {

        setLoading(true)

        if (!steps[0].isPassed) {

            let result = await handleUpdateOrder(order._id, { addressId: selectedAddress, deliveryId: selectedDelivery })

            if (result.status !== 200) {
                setLoading(false)
                return
            }
            queryClient.invalidateQueries(['order', order._id]);

            setSteps(prevState => {
                prevState[0].isPassed = true;
                return [...prevState];
            })
            setAllowedNext(false)
            return
        }
        if (!steps[1].isPassed) {
            setSteps(prevState => {
                prevState[1].isPassed = true;
                return [...prevState];
            })
            router.push('/gateway/' + order._id)
        }
    }

    if (loading || isLoading) return (<span>loading...</span>)
    if (errorObj.isError) return (<span className="text-white">{errorObj.errorMessage}</span>)


    return (
        <div className="p-20 flex flex-col gap-y-4">
            <Stepper steps={steps} />
            {(!steps[0].isPassed && addresses && deliveryMethods) && (
                <>
                    <CheckoutAddress addresses={addresses} newAddressVis={newAddressVis} handleSelectAddress={handleSelectAddress} isAddressSelected={isAddressSelected} toggleNewAddressModal={toggleNewAddressModal} handleAddNewAddress={handleAddNewAddress} />
                    <CheckoutDelivery deliveryMethods={deliveryMethods} handleSelectDelivery={handleSelectDelivery} isDeliverySelected={isDeliverySelected} />
                </>
            )}
            {(steps[0].isPassed && !steps[1].isPassed) && (
                <>
                    <CheckoutDiscount />
                    <CheckoutGateway isGatewaySelected={isGatewaySelected} handleSelectGateway={handleSelectGateway} />
                    <CheckoutSummary order={order} />
                </>
            )}


            {(!steps[0].isPassed || (steps[0].isPassed && !steps[1].isPassed)) && (
                <button onClick={handleGoNext} disabled={!allowedNext} className={`${!allowedNext ? 'disabled' : ''} mt-10 w-full py-3 font-bold text-white text-xl bg-red-500 rounded-xl`}>{steps[0].isPassed ? 'Pay Now' : 'Next'}</button>
            )}
        </div>
    );
}

export default Checkout;