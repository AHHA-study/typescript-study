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
  const [page, setPage] = useState<number>(0)
  const [list, setList] = useState<Data[]>([])

  const concatList = async () => {
    try {
      const result = await getData(page)

      setList((prev) => [...prev, ...result.data])
      setPage(page + 1)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    concatList()
  }, [])

  return (
    <div>
      <Table data={list} />
      <button onClick={concatList}>더보기</button>
    </div>
  )
}

export default Main
