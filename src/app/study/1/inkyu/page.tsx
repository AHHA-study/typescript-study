'use client';

import { useState, useEffect } from 'react';

type DataType = { data: { id: number; name: string; value: string }[] };

const getData = async (index: number): Promise<DataType> => {
  const res = await fetch(`http://localhost:3000/api/random?size=10&index=${index}`);

  if (!res.ok) {
    throw new Error('data fetch error.');
  }

  return res.json();
};

const Main = () => {
  const [data, setData] = useState<DataType['data']>([]);

  const handleGetMoreData = () => {
    getData(data.length).then((res) => setData((state) => [...state, ...res.data]));
  };

  useEffect(() => {
    getData(0).then((res) => setData(res.data));
  }, []);

  return (
    <main className="flex flex-col gap-10 items-center justify-center w-full">
      <div className="flex flex-col gap-3 items-start">
        {data.map(({ id, name, value }, i) => (
          <div key={i} className="flex gap-5">
            <span className="text-lg font-bold">{id}</span>
            <span>{name}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <button className="mb-10 bg-slate-700 w-1/3 h-10 rounded-md" onClick={handleGetMoreData}>
        더보기
      </button>
    </main>
  );
};

export default Main;
