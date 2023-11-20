"use client"

import { useEffect, useState } from "react";

interface DataType {
  id: 'number';
  name: 'string';
  value: 'string';
}

const Main = () => {
  const [listData, setListData] = useState<DataType[]>([])
  const [startIndex, setStartIndex] = useState(0)

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/random?size=10&index=${startIndex}`);
    if (!res.ok) {
      throw new Error('data fetch error.');
    }
    return res.json();
  };

  const fetchData = async () => {
    const { data } = await getData()
    const newData = listData.concat(data)
    setListData(newData)
  }

  useEffect(() => {
    fetchData()
  }, [startIndex])

  return <div>
    {listData.map(({id, name, value}) => (
      <div key={id}>
        <div>{id}</div>
        <div>{name}</div>
        <div>{value}</div>
      </div>))}
    
    <button
      style={{ padding: '1rem', marginTop: '1rem', border: '2px solid white' }}
      onClick={() => setStartIndex((prev) => prev + 10)}
    >
      더보기
    </button>
  </div>
}

export default Main
