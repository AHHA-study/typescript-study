import React, { ReactNode } from 'react'

import './table.css'

interface Data {
  id: number
  name: string
  value: string
}

interface TableProps {
  data: Data[]
}

const Table = (props: TableProps): ReactNode => {
  const { data } = props

  return (
    <div className='table'>
      <header className='table__header'>
        <div className='table__header--id'>id</div>
        <div className='table__header--name'>name</div>
        <div className='table__header--value'>value</div>
      </header>
      <ul>
        {data.map(({id, name, value}) => (
          <div className='table__row'>
            <li className='table__row--id'>{id}</li>
            <li className='table__row--name'>{name}</li>
            <li className='table__row--value'>{value}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Table
