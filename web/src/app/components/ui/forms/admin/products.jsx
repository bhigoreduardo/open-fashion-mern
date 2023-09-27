import { useState } from 'react'
import ReactQuill from 'react-quill'
import { FaAngleUp, FaArrowsRotate, FaPlus } from 'react-icons/fa6'
import 'react-quill/dist/quill.snow.css'

import { parsedCategories } from '@/utils/data'
import SubHeading from '@/app/components/ui/sub-heading'
import Button from '@/app/components/ui/button'
import Input from '@/app/components/ui/input/input'
import Textarea from '@/app/components/ui/input/textarea'
import Select from '@/app/components/ui/input/select'
import ImageUpload from '@/app/components/ui/input/image-upload'

const toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'font': [] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote'],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],

  ['clean'],
  ['link', 'image', 'video']
]

export default function ProductsForm() {
  const [value, setValue] = useState('')

  return (
    <div className="flex gap-2 mt-2">
      {/* LEFT */}
      <div className="flex flex-col gap-2 w-[80%]">
        <div className="bg-white p-2">
          <Input id="name" label="Nome" name="name" placeholder="Nome da produto. Ex.: Camisa Gola V" />
        </div>

        <div className="bg-white">
          <SubHeading title="Descrição do produto">
            <div className="flex gap-2 items-center">
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaAngleUp size={14} />
              </Button>
            </div>
          </SubHeading>
          <div className="p-2">
            <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Placeholder" modules={{ toolbar: toolbarOptions }} className="bg-gray-100" />
          </div>
        </div>

        <div className="bg-white">
          <SubHeading title="Detalhes do produto">
            <div className="flex gap-2 items-center">
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaAngleUp size={14} />
              </Button>
            </div>
          </SubHeading>

          <div className="p-2">
            <div className="flex items-center gap-2">
              <Button className="text-white bg-orange-700 border border-orange-700 !py-1">Imagens</Button>
              <Button className="text-orange-700 bg-white border border-orange-700 hover:text-white hover:bg-orange-700 !py-1">Atributos</Button>
              <Button className="text-orange-700 bg-white border border-orange-700 hover:text-white hover:bg-orange-700 !py-1">Estoque</Button>
              <Button className="text-orange-700 bg-white border border-orange-700 hover:text-white hover:bg-orange-700 !py-1">Informação entrega</Button>
              <Button className="text-orange-700 bg-white border border-orange-700 hover:text-white hover:bg-orange-700 !py-1">Vídeo</Button>
              <Button className="text-orange-700 bg-white border border-orange-700 hover:text-white hover:bg-orange-700 !py-1">Oferta</Button>
            </div>

            <div className="hidden gap-2 pt-2">
              <div className="flex flex-col gap-2">
                <h6 className="text-base border-b border-gray-300 pb-2">Adicionar capa <span className="text-xs font-normal">(jpg/jpeg)</span></h6>
                <ImageUpload isBigger dimensions="800x800" />
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-base border-b border-gray-300 pb-2">Adicionar galeria <span className="text-xs font-normal">(jpg/jpeg)</span></h6>
                <ImageUpload isBigger dimensions="800x800" />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Input
                id="sku" label="SKU" isRow name="sku" placeholder="Ex.: CSJ0158"
                hint="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
              />
              <Input
                id="code" label="Código do produto" isRow name="code" placeholder="Ex.: A4TECH"
                hint="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
              />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <SubHeading title="SEO tags do produto">
            <div className="flex gap-2 items-center">
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaAngleUp size={14} />
              </Button>
            </div>
          </SubHeading>
          <div className="p-2">
            <Input
              id="meta-title" label="Meta título" isRow name="meta-title" placeholder="Ex.: Camisa Gola V"
              hint="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
            />
            <Textarea
              id="meta-description" label="Meta descrição" isRow name="meta-description" placeholder="Ex.: Roupas femininas confeccionados em Madri"
              hint="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially" cols="30" rows="5"
            />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-2 w-[20%]">
        <Button className="text-white bg-orange-600 hover:bg-orange-700">Visualizar alteração</Button>

        <div className="bg-white">
          <SubHeading title="Publicação">
            <div className="flex gap-2 items-center">
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaAngleUp size={14} />
              </Button>
            </div>
          </SubHeading>
          <div className="flex flex-col gap-2 p-2">
            <div className="flex items-center justify-center gap-2">
              <Select id="status" label="Status" name="status" blankMessage="Publicado" options={parsedCategories} />
              <Select id="visibility" label="Visibilidade" name="visibility" blankMessage="Público" options={parsedCategories} />
            </div>
            <Button className="text-white bg-orange-600 hover:bg-orange-700">Salvar</Button>
          </div>
        </div>

        <div className="bg-white">
          <SubHeading title="Categoria">
            <div className="flex gap-2 items-center">
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaAngleUp size={14} />
              </Button>
            </div>
          </SubHeading>
          <div className="p-2">
            <Input id="name" name="name" placeholder="Pesquisar..." />
          </div>
        </div>

        <div className="bg-white">
          <SubHeading title="Tags do produto">
            <div className="flex gap-2 items-center">
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaArrowsRotate size={14} />
              </Button>
              <Button className="text-orange-600 border border-orange-600 bg-white hover:text-white hover:bg-orange-700">
                <FaAngleUp size={14} />
              </Button>
            </div>
          </SubHeading>
          <div className="flex items-center justify-between gap-2 p-2">
            <Input id="name" name="name" placeholder="Pesquisar..." className="w-full" />
            <Button className="text-white bg-orange-600 hover:bg-orange-700"><FaPlus /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}