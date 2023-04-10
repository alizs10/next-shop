import Head from "next/head";
import Payments from "../../components/App/Profile/Payments";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";
import Payment from "../../database/Models/Payment";
import { jsonParser } from "../../helpers/helpers";
import Order from "../../database/Models/Order";
import CartItem from "../../database/Models/CartItem";
import Product from "../../database/Models/Product";
import Delivery from "../../database/Models/Delivery";
import Address from "../../database/Models/Address";

function PaymentsPage({ payments }) {
    return (
        <>
            <Head>
                <title>
                    Payments | {process.env.APP_NAME}
                </title>
                <meta name="description" content="payments page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Payments payments={payments} />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    const cb = async (props, user) => {
        props.layoutType = "app"
        let payments = await Payment.find({ user: user._id }).populate(
            {
                path: 'order', model: Order,
                populate: [
                    {
                        path: 'items', model: CartItem,
                        populate: { path: 'product', model: Product }
                    },
                    {
                        path: 'address', model: Address,
                    },
                    {
                        path: 'delivery', model: Delivery,
                    },
                    {
                        path: 'payments', model: Payment,
                    },
                ]
            }).exec()
        props.payments = jsonParser(payments)
    }

    return await useRole(req, ['admin', 'user'], cb)
}
export default PaymentsPage;