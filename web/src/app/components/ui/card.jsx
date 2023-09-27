import { Link } from 'react-router-dom'

import { mergeClassName } from '@/utils/format'

export default function Card({ amount, percentage, context, link, linkText, icon, className }) {
  return (
    <article className={mergeClassName('group flex flex-col gap-2 border-t border-orange-600 bg-white p-2', className)}>
      <div className="flex items-end justify-between font-semibold">
        <span className="text-gray-600 text-base">{amount}</span>
        <span className="text-xs text-orange-600">{percentage}</span>
      </div>
      <small className="text-xs text-gray-500">{context}</small>
      <div className="flex items-end justify-between">
        <Link to={link} className="text-xs text-gray-500">{linkText}</Link>
        <span className="flex items-center justify-center w-[35px] h-[35px] bg-gray-200 group-hover:bg-orange-600 rounded-sm transition-all ease-in-out duration-300">{icon}</span>
      </div>
    </article>
  )
}
