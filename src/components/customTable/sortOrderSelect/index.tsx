import { useSortOrderStore } from "@/stores/sortOrderStore";
import { ColHeader, SortOrder } from "@/types";
import { useEffect, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

type SortOrderSelectProps = {
  text: string;
};

function SortOrderSelect({ text }: SortOrderSelectProps) {
  const { updateSortOrder } = useSortOrderStore((state) => state);
  const { sortCriteria } = useSortOrderStore((state) => state);
  const [sortOrder, setSortOrder] = useState<SortOrder>(sortCriteria.sortOrder);

  useEffect(() => {
    if (text === sortCriteria.colHeader) {
      return;
    }

    setSortOrder("");
  }, [text, sortCriteria.colHeader]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let newSortOrder: SortOrder = "";

    switch (sortOrder) {
      case "desc":
        newSortOrder = "asc";
        break;
      case "asc":
        newSortOrder = "desc";
        break;
      default:
        newSortOrder = "asc";
        break;
    }

    setSortOrder(newSortOrder);
    updateSortOrder({
      sortOrder: newSortOrder,
      colHeader: event.currentTarget.innerText as ColHeader,
    });
  };

  const getSortedTriangles = () => {
    switch (sortOrder) {
      case "asc":
        return (
          <>
            <GoTriangleUp className="text-tokyo-green" />
            <GoTriangleDown className="-mt-1.5 text-tokyo-black" />
          </>
        );
      case "desc":
        return (
          <>
            <GoTriangleUp className="text-tokyo-black" />
            <GoTriangleDown className="-mt-1.5 text-tokyo-green" />
          </>
        );
      default:
        return (
          <>
            <GoTriangleUp className="text-tokyo-black" />
            <GoTriangleDown className="text-tokyo-black -mt-1.5" />
          </>
        );
    }
  };

  return (
    <button
      className="flex gap-2 items-center text-lg hover:cursor-pointer"
      type="button"
      onClick={handleClick}
    >
      {text}
      <span>{getSortedTriangles()}</span>
    </button>
  );
}

export default SortOrderSelect;
