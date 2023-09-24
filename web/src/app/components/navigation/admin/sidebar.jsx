import { Link, useLocation } from 'react-router-dom'
import { MdGroup, MdInventory2, MdSell, MdShoppingCart } from 'react-icons/md'
import { FaBuromobelexperte, FaRegSquarePlus } from 'react-icons/fa6'

import useApp from '@/hooks/use-app'

const MENU = `relative flex items-center gap-2 text-sm w-full py-2 pl-6 h-[60px]`
const ACTIVE = `after:absolute after:left-0 after:content[''] after:w-[10px] after:h-[1px] after:border after:border-gray-500 font-medium bg-gray-100`

export default function Sidebar() {
  const location = useLocation()
  const { adminHeaderToggle } = useApp()
  const getClassName = (path) => {
    if (location.pathname.split('/')[2] === path) return `${MENU} ${ACTIVE}`
    return MENU
  }

  return (
    <aside className={`bg-white py-2 ${!adminHeaderToggle ? 'w-[60px]' : 'w-[230px]'}`}>
      <Link to="painel" className={getClassName('painel')}><FaBuromobelexperte size={18} /> {adminHeaderToggle && 'Painel'}</Link>
      <Link to="clientes" className={getClassName('clientes')}><MdGroup /> {adminHeaderToggle && 'Clientes'}</Link>
      <Link to="adicionar-produto" className={getClassName('adicionar-produto')}><FaRegSquarePlus /> {adminHeaderToggle && 'Adicionar produto'}</Link>
      <Link to="produtos" className={getClassName('produtos')}><MdInventory2 /> {adminHeaderToggle && 'Produtos'}</Link>
      <Link to="categorias" className={getClassName('categorias')}><MdSell /> {adminHeaderToggle && 'Categorias'}</Link>
      <Link to="pedidos" className={getClassName('pedidos')}><MdShoppingCart /> {adminHeaderToggle && 'Pedidos'}</Link>
    </aside>
  )
}
