import React, { ReactNode, useState } from 'react'

import './table.css'

interface Data {
  id: number
  name: string
  value: string
}

interface TableProps {
  data: Data[],
  getMoreData: (page: number) => Promise<void>
}

const Table = ( { data, getMoreData }: TableProps): ReactNode => {
  const [page, setPage] = useState<number>(1)

  const handleButtonClick = () => {
    getMoreData(page)
    setPage(page + 1)
  }

  return (
    <div className='component'>
      <table className='table'>
        <tr className='table__header'>
          <th className='table__header--id'>id</th>
          <th className='table__header--name'>name</th>
          <th className='table__header--value'>value</th>
        </tr>
        {data.map(({id, name, value}) => (
          <tr className='table__row'>
            <td className='table__row--id'>{id}</td>
            <td className='table__row--name'>{name}</td>
            <td className='table__row--value'>{value}</td>
          </tr>
        ))}
      </table>
      <button onClick={handleButtonClick}>더보기</button>
    </div>
  )
}

export default Table
