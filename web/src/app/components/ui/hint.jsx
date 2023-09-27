import { FaCircleQuestion } from 'react-icons/fa6'

export default function Hint({ hint }) {
  return (
    hint && (
      <div className="group cursor-pointer">
        <FaCircleQuestion size={14} />
        <span className="hidden group-hover:inline absolute bottom-[40px] text-xs text-white text-center w-[200px] p-1 bg-orange-300 rounded-sm after:absolute after:-bottom-[4.5px] after:left-[2.5px] after:content-[''] after:rotate-45 after:w-[10px] after:h-[10px] after:bg-orange-300 transition-all ease-in-out duration-300">
          {hint}
        </span>
      </div>
    )
  )
}
