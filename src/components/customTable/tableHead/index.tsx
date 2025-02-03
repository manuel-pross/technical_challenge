import { useState } from "react";

type TableHeadProps = {
  colHeaders: string[];
  onClick: (header: string, sortOrder: "asc" | "desc") => void;
};

function TableHead({ colHeaders, onClick }: TableHeadProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    onClick(event.currentTarget.innerText, sortOrder);
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
