import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { handleGetDeliveryMethods, handleGetOrder, handleGetPayment, handleGetUserAddresses, handlePostCheckDiscountCode, handlePostRemoveDiscountCode, handleUpdateOrder } from "../../../helpers/api-helpers";
import Stepper from "../../Common/Stepper";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutDelivery from "./CheckoutDelivery";
import CheckoutDiscount from "./CheckoutDiscount";
import CheckoutGateway from "./CheckoutGateway";
import CheckoutSummary from "./CheckoutSummary";
import { useQuery, useQueryClient } from "react-query";
import { defaultOptions } from "../../../lib/react-query/react-query";
import { LoadingContext } from "../../../context/LoadingContext";

function Checkout({ orderId }) {

    const router = useRouter()
    const queryClient = useQueryClient();

    const { addLoading, closeLoading, loading } = useContext(LoadingContext)


    const [shouldGetDeliveryStepInitData, setShouldGetDeliveryStepInitData] = useState(false)

    async function fetchOrder(id) {
        addLoading("getting order")
        return await handleGetOrder(id)
    }

    const { data: order, isLoading, refetch: refetchOrder } = useQuery(
        ['order', orderId],
        ({ queryKey }) => fetchOrder(queryKey[1]),
        {
            ...defaultOptions,
            onError,
            onSuccess
        })


    function onError(error) {
        let errorStatus = error.response.status;
        let errorMessage = error.response.data.message;
        if (errorStatus === 308) {
            closeLoading({ text: errorMessage, status: "error", redirect: error.response.data.redirect })
        }
        if (errorStatus === 404) {
            closeLoading({ text: errorMessage, status: "error", redirect: "/" })
        }

    }

    function onSuccess() {
        closeLoading()
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

        if (!steps[0].isPassed) {
            let result = await handleUpdateOrder(order._id, { addressId: selectedAddress, deliveryId: selectedDelivery })

            if (result.status !== 200) {

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


    // discount code
    async function handleCheckDiscountCode(code) {
        let data = {
            discountCode: code,
            orderId: order._id
        }

        let result = await handlePostCheckDiscountCode(data)

        if (result.status === 200) {
            refetchOrder()
            return true
        }
    }

    async function handleRemoveDiscountCode()
    {

        let data = {
            orderId: order._id
        }

        let result = await handlePostRemoveDiscountCode(data)

        if (result.status === 200) {
            refetchOrder()
            return true
        }
    }
    

    if (loading || isLoading) return

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
                    <CheckoutDiscount order={order} handleCheckDiscountCode={handleCheckDiscountCode} handleRemoveDiscountCode={handleRemoveDiscountCode} />
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