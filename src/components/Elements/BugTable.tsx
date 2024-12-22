import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  TableProps,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import BugPagination from "./BugPagination";

export type TableColumnType<T> = {
  name: string;
  uid: string;
  render?: (item: T) => React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface BugTableProps<T extends Record<string, any>> extends TableProps {
  columns: TableColumnType<T>[];
  data: T[];
  searchPlaceholder?: string;
  isPagination?: boolean;
  dataPerPage?: number;
  isSearch?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BugTable = <T extends Record<string, any>>({
  columns,
  data,
  searchPlaceholder = "Search...",
  isPagination = false,
  dataPerPage = 10,
  isSearch = false,
  ...props
}: BugTableProps<T>) => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  useEffect(() => {
    if (!searchValue) return;
    setCurrentPage(1);
  }, [searchValue]);
  const dataToShow = isPagination
    ? data.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage)
    : data;

  const filteredData = useMemo(() => {
    if (!searchValue) return dataToShow;

    return dataToShow.filter((item) =>
      Object.values(item).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        }
        return false;
      })
    );
  }, [searchValue, dataToShow]);

  return (
    <div>
      {isSearch && (
        <Input
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mb-4"
        />
      )}
      <Table
        aria-label="Dynamic table with search"
        {...props}
        bottomContent={
          <div className="flex w-full justify-center">
            {isPagination && (
              <BugPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                total={data.length}
              />
            )}
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={String(column.uid)}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={filteredData}>
          {(item) => (
            <TableRow key={String(item["id"] || item["key"])}>
              {columns.map((column) => (
                <TableCell key={String(column.uid)}>
                  {column.render
                    ? column.render(item)
                    : (item[column.uid] as React.ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BugTable;
