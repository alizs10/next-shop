import React from 'react'
import CreateProduct from '../../../components/Admin/CreateProduct'
import AdminLayout from '../../../components/Layouts/AdminLayout'

function AdminProductsPage() {
  return (
    <AdminLayout>
      <CreateProduct/>
    </AdminLayout>
  )
}

export default AdminProductsPage