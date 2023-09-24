import { Link } from 'react-router-dom'
import { MdDashboard, MdGroup, MdAdd, MdInventory2, MdSell, MdShoppingCart } from 'react-icons/md'

export default function Sidebar() {
  return (
    <aside className="bg-white">
      <Link to="painel"><MdDashboard /> Painel</Link>
      <Link to="clientes"><MdGroup /> Cliente</Link>
      <Link to="adicionar-produto"><MdAdd /> Adicionar produto</Link>
      <Link to="produtos"><MdInventory2 /> Produtos</Link>
      <Link to="categorias"><MdSell /> Categorias</Link>
      <Link to="pedidos"><MdShoppingCart /> Pedidos</Link>
    </aside>
  )
}
