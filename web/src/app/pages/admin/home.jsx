import { FaBagShopping, FaCreditCard, FaDollarSign, FaUser } from 'react-icons/fa6'
import { DateRangePicker } from 'rsuite'

import { tableHeader, dataSource } from './orders'
import Heading from '@/app/components/ui/heading'
import Card from '@/app/components/ui/card'
import SubHeading from '@/app/components/ui/sub-heading'
import Input from '@/app/components/ui/input/input'
import Button from '@/app/components/ui/button'
import Table from '@/app/components/ui/table'
import Chart from '@/app/components/ui/chart'

export default function Home() {
  return (
    <section>
      <Heading title="Painel" />
      <div className="bg-white">
        <SubHeading title="Administração da loja">
          <div className="flex gap-2 items-center">
            <DateRangePicker appearance="default" placeholder="Período de busca" style={{ width: 230 }} onChange={(value) => console.log(value)} />
          </div>
        </SubHeading>
      </div>

      {/* FIRST ROW */}
      <div className="flex gap-2 mt-2">
        <Card
          amount="$34,152" percentage="+16.24%" context="Faturamento" link="/pedidos" linkText="Vê análise de faturamento"
          icon={<FaDollarSign size={16} className="text-orange-600 group-hover:text-white duration-300" />}
          className="flex-1"
        />
        <Card
          amount="152" percentage="+16.24%" context="Pedidos" link="/pedidos" linkText="Vê lista de pedidos"
          icon={<FaBagShopping size={16} className="text-orange-600 group-hover:text-white duration-300" />}
          className="flex-1"
        />
        <Card
          amount="52" percentage="+16.24%" context="Clientes" link="/clientes" linkText="Vê lista de clientes"
          icon={<FaUser size={16} className="text-orange-600 group-hover:text-white duration-300" />}
          className="flex-1"
        />
        <Card
          amount="2" percentage="+16.24%" context="Devoluções" link="/" linkText="Peças devolvidas"
          icon={<FaCreditCard size={16} className="text-orange-600 group-hover:text-white duration-300" />}
          className="flex-1"
        />
      </div>

      {/* SECOND ROW */}
      <div className="bg-white mt-2">
        <SubHeading title="Análise de vendas">
          <div className="flex gap-2 items-center">
            <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700 !py-1">
              Semana
            </Button>
            <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700 !py-1">
              Mês
            </Button>
            <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700 !py-1">
              Ano
            </Button>
          </div>
        </SubHeading>
        <Chart />
      </div>

      {/* THIRD ROW */}
      <div className="bg-white mt-2">
        <SubHeading title="Análise de pedidos">
          <div className="flex gap-2 items-center">
            <Input id="name" name="name" placeholder="Pesquisar..." />
          </div>
        </SubHeading>
        <Table columns={tableHeader} dataSource={dataSource} />
      </div>
    </section>
  )
}
