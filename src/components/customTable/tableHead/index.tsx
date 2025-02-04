import SortOrderSelect from "@/components/customTable/sortOrderSelect";
import CategoryHeader from "@/components/customTable/tableHead/categoryHeader";

type TableHeadProps = {
  colHeaders: readonly string[];
};

function TableHead({ colHeaders }: TableHeadProps) {
  return (
    <thead>
      <tr>
        {colHeaders.map((header) => (
          <th key={header}>
            {header === "category" ? (
              <CategoryHeader />
            ) : (
              <SortOrderSelect text={header} />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
