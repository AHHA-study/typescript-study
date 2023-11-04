import Table from "./_component/Table";

export interface APIResponse {
  id: number;
  name: string;
  value: string;
}

export const getTableData = async (page: number) => {
  const start = page * 10;
  const res = await fetch(`http://localhost:3000/api/random?size=10&index=${start}`);

  if (!res.ok) {
    throw new Error('data fetch error.');
  }
  const json = await res.json();

  return json.data as APIResponse[];
};

const Main = async () => {
  const initialData = await getTableData(0);

  return <Table initialData={initialData} />
}

export default Main
