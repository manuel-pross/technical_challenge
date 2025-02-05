import { useSortOrderStore } from "@/stores/sortOrderStore";
import { ColHeader, SortOrder } from "@/types";
import { useState } from "react";

type SortOrderSelectProps = {
  text: string;
};

function SortOrderSelect({ text }: SortOrderSelectProps) {
  const { updateSortOrder } = useSortOrderStore((state) => state);
  const { sortCriteria } = useSortOrderStore((state) => state);
  const [sortOrder, setSortOrder] = useState<SortOrder>(sortCriteria.sortOrder);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newSortOrder = sortOrder === "desc" ? "asc" : "desc";

    setSortOrder(newSortOrder);
    updateSortOrder({
      sortOrder: newSortOrder,
      colHeader: event.currentTarget.innerText as ColHeader,
    });
  };

  return (
    <button
      className="text-lg hover:cursor-pointer"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default SortOrderSelect;
