import React from 'react'
import CreateProduct from '../../../components/Admin/CreateProduct'
import Products from '../../../components/Admin/Products'
import AdminLayout from '../../../components/Layouts/AdminLayout'

function AdminProductsPage() {
  return (
    <AdminLayout title="products">
      <CreateProduct />
      <Products />
    </AdminLayout>
  )
}

export default AdminProductsPage