import Head from 'next/head';
import Orders from '../../components/App/Profile/Orders';
import ProfileLayout from '../../components/App/Profile/ProfileLayout';
import useRole from '../../hooks/useRole';

function OrdersPage() {
    return (
        <>
            <Head>
                <title>
                    Orders | {process.env.APP_NAME}
                </title>
                <meta name="description" content="orders page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Orders />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    function cb(props) {
        props.layoutType = "app"
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default OrdersPage;