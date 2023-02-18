import CreateSize from "../../components/Admin/CreateSize";
import Sizes from "../../components/Admin/Sizes";
import AdminLayout from "../../components/Layouts/AdminLayout";

function AdminSizesPage() {
    return (
        <AdminLayout title="colors">
            <CreateSize />
            <Sizes />
        </AdminLayout>
    );
}

export default AdminSizesPage;