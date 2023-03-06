import Colors from "../../components/Admin/Colors";
import CreateColor from "../../components/Admin/CreateColor";
import AdminLayout from "../../components/Layouts/AdminLayout";
import useRole from "../../hooks/useRole";

function AdminColorsPage() {
    return (
        <AdminLayout title="colors">
            <CreateColor />
            <Colors />
        </AdminLayout>
    );
}


export async function getServerSideProps({ req }) {

    return await useRole(req, 'admin')

}

export default AdminColorsPage;