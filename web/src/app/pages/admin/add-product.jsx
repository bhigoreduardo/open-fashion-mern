import Heading from '@/app/components/ui/heading'
import ProductsForm from '@/app/components/ui/forms/admin/products'
import SubHeading from '@/app/components/ui/sub-heading'
import Button from '@/app/components/ui/button'

export default function AddProduct() {
  return (
    <section>
      <Heading title="Adicionar produto" />
      <div className="bg-white">
        <SubHeading title="Informações do produto">
          <div className="flex gap-2 items-center">
            <Button className="text-white bg-orange-600 hover:bg-orange-700 !py-1">Vê todos</Button>
          </div>
        </SubHeading>
      </div>
      <ProductsForm />
    </section>
  )
}
