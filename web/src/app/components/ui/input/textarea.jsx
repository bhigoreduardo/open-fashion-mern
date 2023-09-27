import Hint from '../hint'

export default function Textarea({ id, label, isRow, hint, children, ...props }) {
  return (
    <label htmlFor={id} className={`flex ${!isRow ? 'flex-col' : 'flex-row'} flex-col gap-1 text-base text-gray-500`}>
      <div className="relative flex items-center gap-1">
        {label}
        <Hint hint={hint} />
      </div>
      <textarea id={id} {...props} className="text-sm rounded-sm border border-gray-200 outline-none bg-white p-1 resize-none"></textarea>
    </label>
  )
}