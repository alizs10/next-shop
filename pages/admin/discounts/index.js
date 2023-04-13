import React from 'react'
import Discounts from '../../../components/Admin/Discounts'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import useRole from '../../../hooks/useRole'

function AdminDiscountsPage() {
  return (
    <AdminLayout title="discounts">
      <Discounts />
    </AdminLayout>
  )
}

export async function getServerSideProps({ req }) {
  return await useRole(req, ['admin'])
}

export default AdminDiscountsPage