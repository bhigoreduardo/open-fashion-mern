import { mergeClassName } from '@/utils/format'

export default function Badge({ className, children }) {
  return (
    <span className={mergeClassName('absolute top-0 right-0 flex items-center justify-center text-xs px-1', className)}>
      {children}
    </span>
  )
}
