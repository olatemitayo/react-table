import { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import Data from "../data.json";
import { COLUMNS } from "../columns";
import Gfilter from "../global-filter";

type DataItem = {
  id: number;
  first_name: string;
  last_name: string;
};

export default function GlobalFilter() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter);

  const { globalFilter }: any = state;
  return (
    <div className="no-scrollbar w-full ">
      <div className="my-4 px-4 w-full flex justify-between items-center z-20 top-0 bg-white py-5 sticky ">
        <h1 className="text-3xl">Data Table</h1>
        <Gfilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="w-full border-collapse">
        <thead className="sticky top-[90px] z-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-4 cursor-pointer bg-[#bf2018] text-white text-start border-2"
                >
                  {column.render("Header")}{" "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="overflow-y-scroll">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 cursor-pointer"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
