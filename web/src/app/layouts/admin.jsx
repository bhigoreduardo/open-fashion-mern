import { Outlet } from 'react-router-dom'

import Sidebar from '@/app/components/navigation/admin/sidebar'
import Header from '@/app/components/navigation/admin/header'
import Footer from '@/app/components/navigation/admin/footer'

export default function Admin() {
  return (
    <main className="flex">
      <Sidebar />
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  )
}