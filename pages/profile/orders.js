import Head from 'next/head';
import Orders from '../../components/App/Profile/Orders';
import Order from '../../database/Models/Order';
import ProfileLayout from '../../components/App/Profile/ProfileLayout';
import useRole from '../../hooks/useRole';
import { jsonParser } from '../../helpers/helpers';

function OrdersPage({ orders }) {
    return (
        <>
            <Head>
                <title>
                    Orders | {process.env.APP_NAME}
                </title>
                <meta name="description" content="orders page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Orders orders={orders} />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    async function cb(props, user) {
        props.layoutType = "app"
        let orders = await Order.find({ user: user._id })
        props.orders = jsonParser(orders)
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default OrdersPage;