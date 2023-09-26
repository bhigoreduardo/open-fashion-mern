import Select from '@/app/components/ui/input/select'
import Pagination from './pagination'

export default function Table({ columns, dataSource, filters }) {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between gap-2 mb-2">
        {filters && filters}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-gray-500">Exibir</span>
          <Select id="show-per-page" name="show-per-page" blankMessage="10" options={[{id: 20, value: 20 }, {id: 30, value: 30 }]} />
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400">
        <table className="w-full text-sm text-left text-gray-500 border border-dashed border-gray-200">
          <thead className="text-xs text-gray-700 bg-gray-100">
            <tr>
              {columns?.map((item, key) => (
                <th key={key} scope="col" className="px-6 py-3">
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource?.map((item, key) => (
              <tr key={key} className="group bg-white border-b border-dashed border-gray-200 hover:bg-gray-100 transition-all ease-in-out duration-300">
                {columns.map((i) => (
                  <td key={`${i.dataIndex}-${key}`} scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                    {item[i.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-6 py-3 border border-dashed border-gray-200">
        <span>Exibindo 1 até 6 de 10</span>
        <Pagination />
      </div>
    </div>
  )
}