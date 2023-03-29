import Head from "next/head";
import ProfileInformation from "../../components/App/Profile/ProfileInformation";
import ProfileLayout from "../../components/App/Profile/ProfileLayout";
import useRole from "../../hooks/useRole";

function ProfilePage() {
    return (
        <>
            <Head>
                <title>
                    Profile | {process.env.APP_NAME}
                </title>
                <meta name="description" content="profile page - nike's shoes shop" />
            </Head>
            <ProfileLayout>
                <ProfileInformation />
            </ProfileLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {

    const cb = (props) => {
        props.layoutType = "app"
    }

    return await useRole(req, ['user', 'admin'], cb)

}

export default ProfilePage;