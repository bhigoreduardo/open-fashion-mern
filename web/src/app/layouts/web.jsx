import { Outlet } from 'react-router-dom'

import Header from '@/app/components/navigation/web/header'
import Footer from '@/app/components/navigation/web/footer'

export default function Web() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
