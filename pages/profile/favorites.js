import Head from "next/head";
import Favorites from "../../components/App/Profile/Favorites";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";
import Favorite from '../../database/Models/Favorite';
import { jsonParser } from "../../helpers/helpers";

function FavoritesPage({ favorites }) {
    return (
        <>
            <Head>
                <title>
                    Favorites | {process.env.APP_NAME}
                </title>
                <meta name="description" content="favorites page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <Favorites favorites={favorites} />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    const cb = async (props, user) => {
        props.layoutType = "app"

        let favorites = await Favorite.find({ user: user._id }).populate('product').exec()
        favorites = favorites.map(fav => ({ ...fav.product, isFavorite: true }))

        props.favorites = await jsonParser(favorites)
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default FavoritesPage;