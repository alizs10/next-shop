import Head from "next/head";
import Favorites from "../../components/App/Profile/Favorites";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";

function FavoritesPage() {
    return (
        <>
            <Head>
                <title>
                    Favorites | {process.env.APP_NAME}
                </title>
                <meta name="description" content="favorites page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Favorites />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    const cb = (props) => {
        props.layoutType = "app"
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default FavoritesPage;