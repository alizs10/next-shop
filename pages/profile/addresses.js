import Head from "next/head";
import Addresses from "../../components/App/Profile/Addresses";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";
import Address from '../../database/Models/Address';
import { jsonParser } from "../../helpers/helpers";

function AddressesPage({ addresses }) {
    return (
        <>
            <Head>
                <title>
                    Addresses | {process.env.APP_NAME}
                </title>
                <meta name="description" content="addresses page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Addresses items={addresses} />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    const cb = async (props, user) => {
        props.layoutType = "app";

        let addresses = await Address.find({ user: user._id });
        props.addresses = jsonParser(addresses);
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default AddressesPage;