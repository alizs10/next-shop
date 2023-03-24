import Head from "next/head";
import Addresses from "../../components/App/Profile/Addresses";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";

function AddressesPage() {
    return (
        <>
            <Head>
                <title>
                    Addresses | {process.env.APP_NAME}
                </title>
                <meta name="description" content="addresses page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Addresses />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {
    return await useRole(req, ['admin', 'user'], { layoutType: "app" })
}

export default AddressesPage;