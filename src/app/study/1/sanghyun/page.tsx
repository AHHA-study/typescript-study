'use client'
import React, { useEffect, useState } from "react"
import Table from "./component/table"

interface Data {
  id: number
  name: string
  value: string
}

interface ApiReturnType {
  data: Data[]
}

const getData = async (page: number): Promise<ApiReturnType> => {
  const res = await fetch(`http://localhost:3000/api/random?size=10&index=${page}`)

  if (!res.ok) {
    throw new Error('data fetch error.')
  }

  return res.json()
}

const Main = () => {
  const [list, setList] = useState<Data[]>([])

  const getMoreData = async (page: number) => {
    try {
      const result = await getData(page * 10)

      setList((prev) => [...prev, ...result.data])
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMoreData(0)
  }, [])

  return (
    <>
      <Table
        data={list}
        getMoreData={getMoreData}
      />
    </>
  )
}

export default Main
