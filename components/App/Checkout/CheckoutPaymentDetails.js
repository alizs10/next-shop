import CheckBadgeIcon from "../../ui/icons/CheckBadgeIcon";

function CheckoutPaymentDetails({ payment }) {
    return (
        <div className="mt-44 w-full flex justify-center">
            <div className="w-fit flex flex-col items-center gap-y-2">
                <span className="scale-[500%] text-red-500">
                    <CheckBadgeIcon />
                </span>

                <span className="text-red-500 mt-20 text-5xl">{payment.status ? 'successful' : 'unsuccessful'} payment</span>
            </div>
        </div>
    );
}

export default CheckoutPaymentDetails;