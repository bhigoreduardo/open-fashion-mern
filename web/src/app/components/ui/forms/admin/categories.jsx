import { useState } from 'react'

import { parsedCategories } from '@/utils/data'
import SubHeading from '@/app/components/ui/sub-heading'
import Input from '@/app/components/ui/input/input'
import Select from '@/app/components/ui/input/select'
import Textarea from '@/app/components/ui/input/textarea'
import Button from '@/app/components/ui/button'
import ImageUpload from '@/app/components/ui/input/image-upload'

export default function CategoriesForm() {
  const [isImage, setIsImage] = useState(false)

  return (
    <>
      <SubHeading title="Adicionar nova categoria" />
      <form className="flex flex-col gap-2 px-2 pb-2">
        <Input id="name" label="Nome" name="name" placeholder="Nome da categoria. Ex.: Roupas" />
        <Select id="main-category" label="Categoria principal" name="main-category" blankMessage="Categoria principal" options={parsedCategories} />
        <Textarea id="description" label="Descrição" name="description" placeholder="Descrição da categoria. Ex.: Roupas femininas confeccionados em Madri" cols="30" rows="10" />
        <Select id="type-category" label="Tipo categoria" name="type-category" blankMessage="Tipo da categoria" options={parsedCategories} />
        <Button className="mr-auto" onClick={() => setIsImage((prevState) => !prevState)}>Adicionar imagem</Button>
        {isImage && <ImageUpload id="image" name="image" dimensions="300 x 300" />}
        <Button type="submit" className="text-white bg-orange-600 ml-auto">Salvar categoria</Button>
      </form>
    </>
  )
}