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
        <section className="flex h-[calc(100vh-60px)] overflow-y-auto">
          <Sidebar />
          <div className="flex flex-col justify-between w-full bg-gray-100">
            <section className="p-2">
              <Outlet />
            </section>
            <Footer />
          </div>
        </section>
      </main>
    </AdminDefaultProviders>
  )
}