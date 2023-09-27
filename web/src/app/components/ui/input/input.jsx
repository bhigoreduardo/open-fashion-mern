import { mergeClassName } from '@/utils/format'
import Hint from '../hint'

export default function Input({ id, label, isRow, hint, className, ...props }) {
  return (
    <label htmlFor={id} className={mergeClassName(`flex ${!isRow ? 'flex-col' : 'flex-row'} gap-1 text-base text-gray-500`, className)}>
      <div className="relative flex items-center gap-1">
        {label}
        <Hint hint={hint} />
      </div>
      <input id={id} {...props} className="text-sm rounded-sm border border-gray-200 outline-none bg-white p-1" />
    </label>
  )
}