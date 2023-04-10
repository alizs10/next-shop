import Head from "next/head";
import Addresses from "../../components/App/Profile/Addresses";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";
import Address from '../../database/Models/Address';
import { jsonParser } from "../../helpers/helpers";
import useProfileInformation from "../../hooks/useProfileInfomation";

function AddressesPage(props) {
    return (
        <>
            <Head>
                <title>
                    Addresses | {process.env.APP_NAME}
                </title>
                <meta name="description" content="addresses page - nike's shoes shop" />
            </Head>
            <ProfileLayout data={props}>
                <Addresses items={props.addresses} />
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

        let addresses = await Address.find({ user: user._id });
        props.addresses = jsonParser(addresses);
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default AddressesPage;