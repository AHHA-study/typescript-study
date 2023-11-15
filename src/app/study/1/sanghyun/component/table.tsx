import React, { ReactNode } from 'react'

interface TableProps {
  data: string[];
}

const Table = (props: TableProps): ReactNode => {
  const { data } = props

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default Table
