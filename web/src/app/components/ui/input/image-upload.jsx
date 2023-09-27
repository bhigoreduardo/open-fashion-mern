import { FaRegImage } from 'react-icons/fa6'

export default function ImageUpload({ id, isBigger, dimensions, ...props }) {
  return (
    <label htmlFor={id} className={`flex flex-col gap-2 items-center justify-center ${!isBigger ? 'w-[100px] h-[100px]' : 'w-[180px] h-[180px]'} text-xs border border-dashed border-gray-200 hover:border-gray-500 transition-all ease-in-out duration-300 bg-gray-50 rounded-sm cursor-pointer`}>
      <FaRegImage size={20} />
      <span className="text-center">Recomendado: {dimensions}</span>
      <input id={id} type="file" {...props} className="hidden" />
    </label>
  )
}