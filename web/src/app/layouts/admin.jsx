import { Outlet } from 'react-router-dom'

import Sidebar from '@/app/components/navigation/admin/sidebar'
import Header from '@/app/components/navigation/admin/header'
import Footer from '@/app/components/navigation/admin/footer'
import AdminDefaultProviders from '@/app/providers/admin-default-providers'

export default function Admin() {
  return (
    <AdminDefaultProviders>
      <main>
        <Header />
        <section className="flex">
          <Sidebar />
          <Outlet />
          <Footer />
        </section>
      </main>
    </AdminDefaultProviders>
  )
}