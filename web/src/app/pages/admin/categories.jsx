import { FaArrowsRotate, FaEllipsisVertical, FaRegEye, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6'

import { categories } from '@/utils/data'
import Heading from '@/app/components/ui/heading'
import Input from '@/app/components/ui/input/input'
import Button from '@/app/components/ui/button'
import SubHeading from '@/app/components/ui/sub-heading'
import Table from '@/app/components/ui/table'
import CategoriesForm from '@/app/components/ui/forms/admin/categories'

const tableHeader = [
  { title: 'Nome', dataIndex: 'name' },
  { title: 'Descrição', dataIndex: 'description' },
  { title: 'Tipo categoria', dataIndex: 'typeCategory' },
  { title: 'Quantidade', dataIndex: 'quantity' },
  { title: 'Ações', dataIndex: 'action' },
]

const dataSource = categories.map((item) => ({
    ...item,
    name: (
      <div className="flex items-center gap-2">
        {item.image && 
          <img src={item.image} className="w-[50px] h-[50xp] p-1 border border-gray-200 rounded-sm" />
        }
        <span>{item.name}</span>
      </div>
    ),
    quantity: 10, action: (
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer"><FaRegEye /></button>
        <button className="text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer"><FaRegPenToSquare /></button>
        <button className="text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer"><FaRegTrashCan /></button>
      </div>
    )
  }))

export default function Categories() {
  return (
    <section>
      <Heading title="Categorias" />
      <div className="flex gap-2 mt-2">
        <div className="flex flex-col gap-2 w-[30%] bg-white">
          <CategoriesForm />
        </div>

        <div className="flex flex-col gap-2 w-[70%] bg-white">
          <SubHeading title="Todas categorias">
            <div className="flex gap-2 items-center">
              <Input id="name" name="name" placeholder="Pesquisar..." />
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaEllipsisVertical size={14} />
              </Button>
            </div>
          </SubHeading>
          <Table columns={tableHeader} dataSource={dataSource} />
        </div>
      </div>
    </section>
  )
}
