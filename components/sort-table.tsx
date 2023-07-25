import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  UseSortByHooks,
  HeaderGroup,
  UseSortByColumnProps,
} from "react-table";
import Data from "./data.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import Image from "next/image";

export default function SortTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  return (
    <div className="no-scrollbar w-full">
      <table {...getTableProps()} className="w-full border-collapse">
        <thead className="sticky top-0 z-10">
          {headerGroups.map((headerGroup: HeaderGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-4  cursor-pointer bg-[#bf2018] text-white text-start border-2"
                >
                  <div className="flex items-center gap-3">
                    {column.render("Header")}

                    <span>
                      {column.isSorted | column.isSortedDesc ? (
                        <span>
                          <Image
                            width={16}
                            height={16}
                            src={"/sort.svg"}
                            alt="down"
                          />
                        </span>
                      ) : (
                        <Image
                          width={16}
                          height={16}
                          src={"/sort.svg"}
                          alt="down"
                        />
                      )}
                    </span>
                  </div>
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
