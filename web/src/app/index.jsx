import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Web from '@/app/layouts/web'
import HomeWeb from '@/app/pages/web/home'
import Search from '@/app/pages/web/search'
import Detail from '@/app/pages/web/detail'
import Wishlist from '@/app/pages/web/wishlist'
import Compare from '@/app/pages/web/compare'
import Cart from '@/app/pages/web/cart'
import LoginWeb from '@/app/pages/web/login'
import Profile from '@/app/pages/web/profile'
import PrivacyPolicy from '@/app/pages/web/privacy-policy'
import TermCondition from '@/app/pages/web/term-condition'
import About from '@/app/pages/web/about'
import Contact from '@/app/pages/web/contact'
import Faq from '@/app/pages/web/faq'
import NotFound from '@/app/pages/web/not-found'

import Admin from '@/app/layouts/admin'
import LoginAdmin from '@/app/pages/admin/login'
import HomeAdmin from '@/app/pages/admin/home'
import Customers from '@/app/pages/admin/customers'
import Customer from '@/app/pages/admin/customer'
import AddProduct from '@/app/pages/admin/add-product'
import Products from '@/app/pages/admin/products'
import Categories from '@/app/pages/admin/categories'
import Orders from '@/app/pages/admin/orders'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route path="" element={<HomeWeb />} />
          <Route path="/produtos" element={<Search />} />
          <Route path="/produtos/calcados" element={<Search />} />
          <Route path="/produtos/roupas" element={<Search />} />
          <Route path="/produtos/acessorios" element={<Search />} />
          <Route path="/produtos/moda-intima" element={<Search />} />
          <Route path="/produtos/esportes" element={<Search />} />
          <Route path="/produtos/marcas" element={<Search />} />
          <Route path="/produtos/:productId" element={<Detail />} />
          <Route path="/favoritos" element={<Wishlist />} />
          <Route path="/comparacao" element={<Compare />} />
          <Route path="/carrinho" element={<Cart />} />

          <Route path="/login" element={<LoginWeb />} />
          <Route path="/conta" element={<Profile />} />
          <Route path="/politicas-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-condicoes" element={<TermCondition />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/perguntas-frequentes" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="painel" element={<HomeAdmin />} />
          <Route path="clientes" element={<Customers />} />
          <Route path="clientes/:customerId" element={<Customer />} />
          <Route path="adicionar-produto" element={<AddProduct />} />
          <Route path="produtos" element={<Products />} />
          <Route path="categorias" element={<Categories />} />
          <Route path="pedidos" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  )
}
