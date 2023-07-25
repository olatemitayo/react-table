import { useMemo } from "react";
import { useTable } from "react-table";
import Data from "./data.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";

export default function SimpleTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div className="no-scrollbar w-full">
      <table {...getTableProps()} className="w-full border-collapse">
        <thead className="sticky top-0 z-10">
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td
                  {...column.getFooterProps}
                  className="p-4 cursor-pointer bg-[#bf2018] text-white text-start"
                >
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
