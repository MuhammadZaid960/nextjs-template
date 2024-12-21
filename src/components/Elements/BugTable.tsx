import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";

export const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export type TableColumnType<T> = {
  name: string;
  uid: string;
  render?: (item: T) => React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BugTableProps<T extends Record<string, any>> = {
  columns: TableColumnType<T>[];
  data: T[];
  searchPlaceholder?: string;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BugTable = <T extends Record<string, any>>({
  columns,
  data,
  searchPlaceholder = "Search...",
}: BugTableProps<T>) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter((item) =>
      Object.values(item).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      })
    );
  }, [searchTerm, data]);

  return (
    <div>
      <Input
        placeholder={searchPlaceholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table aria-label="Dynamic table with search" color="default">
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
