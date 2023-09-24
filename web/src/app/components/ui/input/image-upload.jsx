import { FaRegImage } from 'react-icons/fa6'

export default function ImageUpload({ id, dimensions, ...props }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2 items-center justify-center w-[100px] h-[100px] text-xs border border-dashed border-gray-200 hover:border-gray-500 transition-all ease-in-out duration-300 bg-gray-50 rounded-sm cursor-pointer">
      <FaRegImage size={20} />
      <span className="text-center">Recomendado: {dimensions}</span>
      <input id={id} type="file" {...props} className="hidden" />
    </label>
  )
}