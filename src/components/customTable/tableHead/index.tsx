import { useEffect, useState } from "react";

type TableHeadProps = {
  colHeaders: string[];
  InitialSortingOrder: "asc" | "desc";
  onClick: (header: string, sortOrder: "asc" | "desc") => void;
};

function TableHead({
  colHeaders,
  InitialSortingOrder,
  onClick,
}: TableHeadProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(
    InitialSortingOrder,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newSortOrder = sortOrder === "desc" ? "asc" : "desc";

    setSortOrder(newSortOrder);
    onClick(event.currentTarget.innerText, newSortOrder);
  };

  return (
    <thead>
      <tr>
        {colHeaders.map((header) => (
          <th key={header}>
            <button
              className="hover:cursor-pointer"
              type="button"
              onClick={handleClick}
            >
              {header}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
