import { TableSkeletonProps } from "@/lib/types";
import { Skeleton } from "@mui/material";

export const TableSkeleton = ({
  colCount,
  rowsCount,
  hasCheckbox = false,
}: TableSkeletonProps) => {
  const columns = Array(colCount)
    .fill(null)
    .map((_, i) => {
      return (
        <td key={i} className="p-3">
          <Skeleton animation="wave" />
        </td>
      );
    });

  const rows = Array(rowsCount)
    .fill(null)
    .map((_, i) => {
      return (
        <tr key={i}>
          {hasCheckbox && (
            <td className="p-3 w-[50px]">
              <Skeleton animation="wave" />
            </td>
          )}
          {columns}
        </tr>
      );
    });

  return (
    <>
      <table className="w-full">
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};
