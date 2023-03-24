import Head from "next/head";
import Payments from "../../components/App/Profile/Payments";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";

function PaymentsPage() {
    return (
        <>
            <Head>
                <title>
                    Payments | {process.env.APP_NAME}
                </title>
                <meta name="description" content="payments page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Payments />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {
    return await useRole(req, ['admin', 'user'], { layoutType: "app" })
}

export default PaymentsPage;