'use client'
import { useState } from "react";
import { APIResponse, getTableData } from "../page";

interface TableProps {
    initialData: APIResponse[];
}

const Table = ({ initialData }: TableProps) => {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<APIResponse[]>(initialData);

    const handleViewMore = async () => {
        setIsLoading(true)
        const nextPage = page + 1;
        const res = await getTableData(nextPage)

        setPage(nextPage);
        setData((prev) => [...prev, ...res])
        setIsLoading(false)
    }

    return <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>value</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {isLoading && <div>loading...</div>}
        <button onClick={handleViewMore}>더보기</button>
    </>
}

export default Table;
