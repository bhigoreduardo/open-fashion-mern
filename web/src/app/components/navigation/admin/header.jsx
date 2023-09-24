import { Link } from 'react-router-dom'
import { MdLanguage, MdSearch } from 'react-icons/md'
import { FaBarsStaggered, FaRocketchat, FaRegBell, FaRegUser } from 'react-icons/fa6'

import useApp from '@/hooks/use-app'
import LogoIcon from '@/app/components/icons/logo-icon'
import Button from '@/app/components/ui/button'
import Badge from '@/app/components/ui/badge'

export default function Header() {
  const { adminHeaderToggle, setAdminHeaderToogle } = useApp()
  const handleHeaderToogle = () =>
    setAdminHeaderToogle((prevState) => !prevState)

  return (
    <header className="flex">
      <div className="flex-1 flex items-center gap-2">
        <Link to="painel" className={`flex items-center gap-1 justify-center border-b border-r border-dashed border-gray-300 h-[60px] ${!adminHeaderToggle ? 'w-[60px]' : 'w-[230px]'}`}>
          <LogoIcon />
          
          {adminHeaderToggle && <>
            <span className="font-serif text-lg text-gray-600">Open Fashion</span>
            <LogoIcon />
          </>}
        </Link>

        <Button onClick={handleHeaderToogle}><FaBarsStaggered size={20} /></Button>
        <Link to="/"><Button className="text-white bg-orange-600 hover:bg-orange-700"><MdLanguage size={18} />Ver Loja</Button></Link>
      </div>
      <div className="flex-1 flex items-center justify-end gap-2 pr-2">
        <Button className="border border-orange-600"><MdSearch size={18} /></Button>
        <Button className="relative">
          <Badge className="font-normal text-white bg-red-600 rounded-full">3</Badge>
          <FaRocketchat size={18} />
        </Button>
        <Button className="relative">
          <Badge className="font-normal text-white bg-red-600 rounded-full">+9</Badge>
          <FaRegBell size={18} />
        </Button>
        <Button><FaRegUser size={18} /></Button>
      </div>
    </header>
  )
}
