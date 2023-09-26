import { FaArrowsRotate, FaEllipsisVertical, FaFilter } from 'react-icons/fa6'

import { customers, parsedCategories } from '@/utils/data'
import Heading from '@/app/components/ui/heading'
import SubHeading from '@/app/components/ui/sub-heading'
import Input from '@/app/components/ui/input/input'
import Button from '@/app/components/ui/button'
import Table from '@/app/components/ui/table'
import Select from '@/app/components/ui/input/select'

const tableHeader = [
  { title: 'Nome', dataIndex: 'name' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Telefone', dataIndex: 'phone' },
  { title: 'Endereço', dataIndex: 'address' },
  { title: 'Pedidos', dataIndex: 'orders' },
  { title: 'Total gasto', dataIndex: 'amountSpend' },
  { title: 'Data cadastro', dataIndex: 'createdAt' },
  { title: 'Último acesso', dataIndex: 'lastActive' },
]
const dataSource = customers.map((item) => ({
  ...item,
  address: (
    <span>
      {item?.address?.street}, {item?.address?.neighborhood} {item?.address?.city} {item?.address?.state} {item?.address?.zipCode}
    </span>
  )
}))
const filters = (
  <div className="flex items-center gap-2">
    <Select id="active" name="active" blankMessage="Ativos/Inativos" options={parsedCategories} />
    <Select id="online" name="online" blankMessage="Online/Offline" options={parsedCategories} />
    <Button className="text-white bg-orange-600 hover:bg-orange-700 !py-1"><FaFilter size={12} />Filtrar</Button>
  </div>
)

export default function Customers() {
  return (
    <section>
      <Heading title="Clientes" />
      <div className="bg-white">
        <SubHeading title="Todos clientes">
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
        <Table columns={tableHeader} dataSource={dataSource} filters={filters} />
      </div>
    </section>
  )
}
