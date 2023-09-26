import { FaArrowsRotate, FaEllipsisVertical, FaFilter, FaPlus, FaRegEye, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6'
import ReactStars from 'react-rating-stars-component'

import { products, parsedCategories } from '@/utils/data'
import Heading from '@/app/components/ui/heading'
import SubHeading from '@/app/components/ui/sub-heading'
import Input from '@/app/components/ui/input/input'
import Button from '@/app/components/ui/button'
import Table from '@/app/components/ui/table'
import Select from '@/app/components/ui/input/select'

const tableHeader = [
  { title: 'Nome', dataIndex: 'name' },
  { title: 'SKU', dataIndex: 'sku' },
  { title: 'Estoque', dataIndex: 'stock' },
  { title: 'Preço', dataIndex: 'price' },
  { title: 'Vendas', dataIndex: 'sales' },
  { title: 'Avaliações', dataIndex: 'rating' },
  { title: 'Publicação', dataIndex: 'createdAt' },
  { title: 'Ações', dataIndex: 'action' },
]
const dataSource = products.map((item) => ({
  ...item,
  name: (
    <div className="flex items-center gap-2">
      {item.image && 
        <img src={item.image} className="w-[50px] h-[50xp] p-1 border border-gray-200 rounded-sm" />
      }
      <div className="flex flex-col gap-1">
        <span>{item.name}</span>
        <span className="hidden text-xs text-gray-500 group-hover:inline transition-all ease-in-out duration-300">Categoria: {item.category}</span>
      </div>
    </div>
  ),
  rating: (
    <div className="flex flex-col items-center">
      <ReactStars count={5} size={16} value={item?.rating?.avg} edit={false} activeColor="#F0C434" />
      <span className="text-xs text-black">({item?.rating?.count})</span>
    </div>
  ),
  action: (
    <div className="flex items-center gap-2">
      <button className="text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer"><FaRegEye /></button>
      <button className="text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer"><FaRegPenToSquare /></button>
      <button className="text-gray-400 hover:text-gray-700 transition-all ease-in-out duration-300 cursor-pointer"><FaRegTrashCan /></button>
    </div>
  )
}))
const filters = (
  <div className="flex items-center gap-2">
    <Select id="category" name="category" blankMessage="Todas categorias" options={parsedCategories} />
    <Select id="stock" name="stock" blankMessage="Todos estoques" options={parsedCategories} />
    <Select id="order" name="order" blankMessage="Mais populares" options={parsedCategories} />
    <Button className="text-white bg-orange-600 hover:bg-orange-700 !py-1"><FaFilter size={12} />Filtrar</Button>
  </div>
)

export default function Products() {
  return (
    <section>
      <Heading title="Produtos" />
      <div className="bg-white">
        <SubHeading title="Todos produtos">
          <div className="flex gap-2 items-center">
            <Input id="name" name="name" placeholder="Pesquisar..." />
            <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
            <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
              <FaEllipsisVertical size={14} />
            </Button>
            <Button className="text-white bg-orange-600 hover:bg-orange-700 !py-1"><FaPlus size={12} />Adicionar produto</Button>
          </div>
        </SubHeading>
        <Table columns={tableHeader} dataSource={dataSource} filters={filters} />
      </div>
    </section>
  )
}
