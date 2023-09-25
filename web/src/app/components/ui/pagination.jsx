import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

export default function Pagination() {
  return (
    <div className="flex items-center gap-2">
      <button className="cursor-pointer"><FaAngleLeft size={10} /></button>
      <div className="flex items-center gap-1">
      <button type="button" className="flex items-center justify-center text-white font-normal text-xs rounded-sm h-[20px] w-[20px] bg-orange-600 cursor-pointer">
        1
      </button>
      <span className="text-center text-black font-normal text-sm rounded-sm h-[20px] w-[20px]">
        ...
      </span>
      <button type="button" className="flex items-center justify-center text-gray-500 font-normal text-xs rounded-sm h-[20px] w-[20px] bg-gray-200 cursor-pointer">
        10
      </button>
      </div>
      <button className="cursor-pointer"><FaAngleRight size={10} /></button>
    </div>
  )
}