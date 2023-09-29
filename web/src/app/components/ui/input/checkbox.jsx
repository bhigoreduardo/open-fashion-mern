import { mergeClassName } from '@/utils/format'

export default function Checkbox({ id, label, className, ...props }) {
  return (
    <label htmlFor={id} className={mergeClassName('flex items-center gap-1 text-sm text-gray-500 cursor-pointer', className)}>
      <input type="checkbox" id={id} {...props} className="text-sm rounded-sm border border-gray-200 outline-none bg-transparent w-4 h-4 p-1 checked:bg-[url('/images/check-mark-black.png')] checked:bg-[#ebebeb]" />
      {label}
    </label>
  )
}
