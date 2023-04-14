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
import useProfileInformation from "../../hooks/useProfileInfomation";
import DiscountCode from "../../database/Models/DiscountCode";

function PaymentsPage(props) {
    return (
        <>
            <Head>
                <title>
                    Payments | {process.env.APP_NAME}
                </title>
                <meta name="description" content="payments page - nike's shoes shop" />
            </Head>
            <ProfileLayout data={props}>
                <Payments payments={props.payments} />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    const cb = async (props, user) => {
        props.layoutType = "app";

        let initialProfileInformation = await useProfileInformation(user)

        Object.keys(initialProfileInformation).forEach(key => {
            props[key] = initialProfileInformation[key]
        })


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
                    {
                        path: 'discountCode', model: DiscountCode,
                    },
                ]
            }).exec()
        props.payments = jsonParser(payments)
    }

    return await useRole(req, ['admin', 'user'], cb)
}
export default PaymentsPage;