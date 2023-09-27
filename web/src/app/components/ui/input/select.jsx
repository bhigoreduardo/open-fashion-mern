export default function Select({ id, label, blankMessage, options, ...props }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1 text-base text-gray-500">
      {label}
      <select id={id} defaultValue="" {...props} className="relative text-sm rounded-sm border border-gray-200 outline-none bg-white p-1 after:absolute after:content-[''] after:right-10 after:top-1 after:z-10 after:w-[8px] after:h-[5px] after:bg-black">
        <option value="" disabled>{blankMessage}</option>
        {options?.map((item, key) => (
          <option key={key} value={item.id}>{item.value}</option>
        ))}
      </select>
    </label>
  )
}