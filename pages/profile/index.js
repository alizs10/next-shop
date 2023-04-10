import Head from "next/head";
import ProfileInformation from "../../components/App/Profile/ProfileInformation";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";
import useProfileInformation from "../../hooks/useProfileInfomation";
import { connectDatabase } from "../../util/database-util";
// import Payment from '../../database/Models/Payment';
// import Favorite from '../../database/Models/Favorite';
// import Address from '../../database/Models/Address';
// import { connectDatabase } from "../../util/database-util";

function ProfilePage(props) {
    return (
        <>
            <Head>
                <title>
                    Profile | {process.env.APP_NAME}
                </title>
                <meta name="description" content="profile page - nike's shoes shop" />
            </Head>
            <ProfileLayout data={props}>
                <ProfileInformation />
            </ProfileLayout>
        </>
    );
}

// export async function getInitialProfileInformation(user) {

//     await connectDatabase(process.env.DB_NAME)

//     let orders = await Order.find({ user: user._id })
//     let ordersCount = orders.length;
//     // let favoritesCount = await Favorite.count({ user: user._id })
//     // let paymentsCount = await Payment.count({ user: user._id })
//     // let addressesCount = await Address.count({ user: user._id })

//     return { ordersCount }
// }

export async function getServerSideProps({ req }) {

    const cb = async (props, user) => {
        props.layoutType = "app"

        let initialProfileInformation = await useProfileInformation(user)

        Object.keys(initialProfileInformation).forEach(key => {
            props[key] = initialProfileInformation[key]
        })
    }

    return await useRole(req, ['user', 'admin'], cb)

}

export default ProfilePage;