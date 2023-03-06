import CreateSize from "../../components/Admin/CreateSize";
import Sizes from "../../components/Admin/Sizes";
import AdminLayout from "../../components/Layouts/AdminLayout";
import useRole from "../../hooks/useRole";

function AdminSizesPage() {
    return (
        <AdminLayout title="colors">
            <CreateSize />
            <Sizes />
        </AdminLayout>
    );
}


export async function getServerSideProps({ req }) {

    return await useRole(req, 'admin')

}

export default AdminSizesPage;