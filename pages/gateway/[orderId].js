import { connectDatabase } from '../../util/database-util';
import Order from '../../database/Models/Order';
import Delivery from '../../database/Models/Delivery';
import { jsonParser } from '../../helpers/helpers';
import { useRouter } from 'next/router';
import { handlePostPayment } from '../../helpers/api-helpers';
import DiscountCode from '../../database/Models/DiscountCode';

function GatewayPage({ order }) {

    const router = useRouter();

    async function handlePayment() {

        let inputs = {
            orderId: order._id,
            status: '1'
        }

        let result = await handlePostPayment(inputs)

        if (result.status !== 201) return

        let data = await result.json()

        router.replace('/checkout?transactionId=' + data.payment._id)

    }

    async function handleCancelPayment() {

        let inputs = {
            orderId: order._id,
            status: '0'
        }

        let result = await handlePostPayment(inputs)

        if (result.status !== 201) return

        let data = await result.json()

        router.replace('/checkout?transactionId=' + data.payment._id)
    }

    let discountCode = order.discountCode;
    let payAmount = order.payAmount;
    let discountAmount = order.discountAmount;
    let shippingAmount = order.delivery?.price ?? 0;
    let taxAmount = order.tax;
    let total = payAmount + shippingAmount + taxAmount;
    let discountCodeAmount = discountCode ? (total * discountCode.percentage / 100) : 0

    console.log(total, discountCodeAmount);
    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="transition-all duration-300 w-4/5 sm:w-3/5 lg:w-1/3 h-1/2 rounded-xl bg-gray-700 p-3 shadow-xl flex flex-col gap-y-4">
                <h1 className="w-full text-center text-5xl font-bold text-white pt-8">Fake Gateway</h1>

                <div className="self-center flex flex-col items-center gap-y-1 mt-auto">
                    <span className="text-2xl text-gray-300">Pay Amount</span>
                    <span className="font-bold text-3xl text-red-500">$ {total - discountCodeAmount}</span>
                </div>


                <div className="self-center flex flex-col gap-y-2 w-full mt-auto">
                    <button onClick={handlePayment} className="w-full py-3 rounded-xl bg-red-500 text-2xl text-white font-bold">Successful</button>
                    <button onClick={handleCancelPayment} className="w-full py-3 rounded-xl bg-gray-500 text-2xl text-white font-bold">Cancel</button>
                </div>


            </div>
        </section>
    );
}

export async function getServerSideProps(ctx) {

    let { orderId } = ctx.params;

    await connectDatabase(process.env.DB_NAME)
    let order = await Order.findById(orderId).populate([
        { path: 'delivery', model: Delivery },
        { path: 'discountCode', model: DiscountCode },
    ]).exec()

    // closeConnection()

    return {
        props: {
            order: jsonParser(order)
        }
    }
}

export default GatewayPage;