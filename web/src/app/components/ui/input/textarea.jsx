export default function Textarea({ id, label, children, ...props }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1 text-base">
      {label}
      <textarea id={id} {...props} className="text-sm rounded-sm border border-gray-200 outline-none bg-white p-1 resize-none"></textarea>
    </label>
  )
}