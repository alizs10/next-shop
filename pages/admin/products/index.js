import React from 'react'
import CreateProduct from '../../../components/Admin/CreateProduct'
import Products from '../../../components/Admin/Products'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import useRole from '../../../hooks/useRole'

function AdminProductsPage() {
  return (
    <AdminLayout title="products">
      <CreateProduct />
      <Products />
    </AdminLayout>
  )
}

export async function getServerSideProps({ req }) {

  return await useRole(req, 'admin')

}

export default AdminProductsPage