import Head from "next/head";
import Favorites from "../../components/App/Profile/Favorites";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";
import Favorite from '../../database/Models/Favorite';
import { jsonParser } from "../../helpers/helpers";
import useProfileInformation from "../../hooks/useProfileInfomation";

function FavoritesPage(props) {
    return (
        <>
            <Head>
                <title>
                    Favorites | {process.env.APP_NAME}
                </title>
                <meta name="description" content="favorites page - nike's shoes shop" />
            </Head>
            <ProfileLayout data={props}>
                <Favorites favorites={props.favorites} />
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

        let favorites = await Favorite.find({ user: user._id }).populate('product').exec()

        favorites = jsonParser(favorites).map(fav => ({ ...fav.product, isFavorite: true }))

        console.log(favorites);
        props.favorites = favorites
    }

    return await useRole(req, ['admin', 'user'], cb)
}

export default FavoritesPage;