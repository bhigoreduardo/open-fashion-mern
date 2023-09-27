import { FaArrowsRotate, FaEllipsisVertical, FaFilter, FaRegEye, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6'
import { DateRangePicker } from 'rsuite'

import { orders, parsedCategories } from '@/utils/data'
import Heading from '@/app/components/ui/heading'
import SubHeading from '@/app/components/ui/sub-heading'
import Input from '@/app/components/ui/input/input'
import Button from '@/app/components/ui/button'
import Table from '@/app/components/ui/table'
import Select from '@/app/components/ui/input/select'
import Chip from '@/app/components/ui/chip'

export const tableHeader = [
  { title: 'Código', dataIndex: 'trackCode' },
  { title: 'Cliente', dataIndex: 'customer' },
  { title: 'Status', dataIndex: 'status' },
  { title: 'Produtos', dataIndex: 'productAmount' },
  { title: 'Total', dataIndex: 'amount' },
  { title: 'Forma pagamento', dataIndex: 'paymentMethod' },
  { title: 'Status entrega', dataIndex: 'deliveryStatus' },
  { title: 'Data compra', dataIndex: 'createdAt' },
  { title: 'Ações', dataIndex: 'action' },
]
export const dataSource = orders.map((item) => ({
  ...item,
  customer: <span>{item?.customer?.name} {item?.customer?.phone}</span>,
  status: <span className="text-red-600">{item.status}</span>,
  deliveryStatus: <Chip className="bg-green-600 text-white">{item.deliveryStatus}</Chip>,
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
    <Select id="active" name="active" blankMessage="Todos status" options={parsedCategories} />
    <Select id="online" name="online" blankMessage="Todos status entrega" options={parsedCategories} />
    <Select id="online" name="online" blankMessage="Todos forma pagamento" options={parsedCategories} />
    <DateRangePicker appearance="default" placeholder="Período de busca" style={{ width: 230 }} onChange={(value) => console.log(value)} />
    <Button className="text-white bg-orange-600 hover:bg-orange-700 !py-1"><FaFilter size={12} />Filtrar</Button>
  </div>
)

export default function Orders() {
  return (
    <section>
      <Heading title="Pedidos" />
      <div className="bg-white">
      <SubHeading title="Todos pedidos">
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
