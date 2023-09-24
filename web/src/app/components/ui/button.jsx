import { mergeClassName } from "@/utils/format"

export default function Button({ className, children, ...props }) {
  return (
    <button type="button" {...props} className={mergeClassName('flex items-center justify-center gap-1 font-medium capitalize text-sm rounded-sm px-3 py-1.5 transition-all ease-in-out duration-300', className)}>
      {children}
    </button>
  )
}
