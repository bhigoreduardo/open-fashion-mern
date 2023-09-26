import { mergeClassName } from '@/utils/format'

export default function Chip({ className, children }) {
  return <span className={mergeClassName('flex items-center justify-center text-xs p-1 rounded-full', className)}>{children}</span>
}
