import Head from 'next/head';
import Orders from '../../components/App/Profile/Orders';
import ProfileLayout from '../../components/App/Profile/ProfileLayout';
import useRole from '../../hooks/useRole';
import { jsonParser } from '../../helpers/helpers';
import Order from '../../database/Models/Order';
import CartItem from '../../database/Models/CartItem';
import Delivery from '../../database/Models/Delivery';
import Address from '../../database/Models/Address';
import Payment from '../../database/Models/Payment';
import Product from '../../database/Models/Product';
import useProfileInformation from '../../hooks/useProfileInfomation';

function OrdersPage(props) {
    return (
        <>
            <Head>
                <title>
                    Orders | {process.env.APP_NAME}
                </title>
                <meta name="description" content="orders page - nike's shoes shop" />
            </Head>
            <ProfileLayout data={props}>
                <Orders orders={props.orders} />
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

        let orders = await Order.find({ user: user._id }).populate([
            { path: 'items', model: CartItem, populate: { path: 'product', model: Product } },
            { path: 'delivery', model: Delivery },
            { path: 'address', model: Address },
            { path: 'payments', model: Payment },
        ]).exec()
        props.orders = jsonParser(orders)
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default OrdersPage;