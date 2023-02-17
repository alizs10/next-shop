import React from 'react'
import Colors from '../../../components/Admin/Colors'
import CreateProduct from '../../../components/Admin/CreateProduct'
import Products from '../../../components/Admin/Products'
import Sizes from '../../../components/Admin/Sizes'
import AdminLayout from '../../../components/Layouts/AdminLayout'

function AdminProductsPage() {
  return (
    <AdminLayout>
      <CreateProduct />
      <Products />
      <Colors />
      <Sizes />
    </AdminLayout>
  )
}

export default AdminProductsPage