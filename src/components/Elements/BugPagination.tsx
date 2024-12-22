import React from "react";
import { Pagination, PaginationProps } from "@nextui-org/pagination";
import BugButton from "./BugButton";

interface IPaginationProps extends PaginationProps {
  // dataLength?: number;
  pageSize?: number;
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  total: number;
}

const BugPagination = ({
  currentPage,
  setCurrentPage,
  total,
  pageSize = 10,
  ...props
}: IPaginationProps) => {
  const totalPage = Math.ceil(total / pageSize);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <BugButton
          isDisabled={currentPage == 1}
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </BugButton>
        <Pagination
          color="secondary"
          page={currentPage}
          onChange={setCurrentPage}
          total={totalPage}
          {...props}
        />
        <BugButton
          color="secondary"
          size="sm"
          variant="flat"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
          isDisabled={currentPage == totalPage}
        >
          Next
        </BugButton>
      </div>
    </div>
  );
};
export default BugPagination;
