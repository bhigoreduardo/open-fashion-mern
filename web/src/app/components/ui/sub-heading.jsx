export default function SubHeading({ title, children }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-gray-300 p-2 h-[50px]">
      <h2 className="font-medium text-base">{title}</h2>
      {children}
    </div>
  )
}
