import Colors from "../../components/Admin/Colors";
import CreateColor from "../../components/Admin/CreateColor";
import AdminLayout from "../../components/Layouts/AdminLayout";

function AdminColorsPage() {
    return (
        <AdminLayout title="colors">
            <CreateColor />
            <Colors />
        </AdminLayout>
    );
}

export default AdminColorsPage;