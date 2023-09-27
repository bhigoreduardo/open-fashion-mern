import { Outlet } from 'react-router-dom'
import { CustomProvider } from 'rsuite'
import { ptBR } from 'rsuite/esm/locales'
import 'rsuite/dist/rsuite.min.css'

import Sidebar from '@/app/components/navigation/admin/sidebar'
import Header from '@/app/components/navigation/admin/header'
import Footer from '@/app/components/navigation/admin/footer'
import AdminDefaultProviders from '@/app/providers/admin-default-providers'

export default function Admin() {
  return (
    <AdminDefaultProviders>
      <CustomProvider locale={ptBR}>
        <main>
          <Header />
          <section className="flex min-h-[calc(100vh-60px)] overflow-y-auto">
            <Sidebar />
            <div className="flex flex-grow flex-col justify-between bg-gray-100 overflow-x-hidden">
              <section className="p-2">
                <Outlet />
              </section>
              <Footer />
            </div>
          </section>
        </main>
      </CustomProvider>
    </AdminDefaultProviders>
  )
}