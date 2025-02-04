import TableBody from "@/components/customTable/tableBody";
import TableHead from "@/components/customTable/tableHead";
import useTechSpecs from "@/hooks/useTechSpecs";
import { useCategoryStore } from "@/stores/categoryStore";
import { useSearchTermStore } from "@/stores/searchTermStore";
import { sortTechSpecs } from "@/utils";
import { useEffect, useState } from "react";

const tableHeaders = [
  "label",
  "category",
  "system_value",
  "user_value",
  "note",
];

function CustomTable() {
  const { status, data: techSpecs, error } = useTechSpecs();
  const [sortedTechSpecs, setSortedTechSpecs] = useState(techSpecs);

  const selectedCategory = useCategoryStore((state) => state.category);
  const searchTerm = useSearchTermStore((state) => state.searchTerm);

  useEffect(() => {
    if (!techSpecs) return;

    if (!selectedCategory) {
      setSortedTechSpecs(techSpecs);
      return;
    }

    if (selectedCategory) {
      const techSpecsToFilter = [...techSpecs];

      setSortedTechSpecs(
        techSpecsToFilter.filter(
          (techSpec) => techSpec.category === selectedCategory,
        ),
      );
    }
  }, [selectedCategory, techSpecs]);

  useEffect(() => {
    if (!techSpecs) return;

    if (!searchTerm) {
      setSortedTechSpecs(techSpecs);
      return;
    }

    const techSpecsToFilter = [...techSpecs];

    setSortedTechSpecs(
      techSpecsToFilter.filter((techSpec) =>
        techSpec.label.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, techSpecs]);

  if (status === "loading") {
    return <p>loading...</p>;
  }

  if (status === "error") {
    return <p>sth went wrong...</p>;
  }

  if (error) {
    return <p>an error occurred</p>;
  }

  const handleColHeaderClick = (header: string, sortOrder: "asc" | "desc") => {
    if (!sortedTechSpecs) {
      return;
    }

    const techSpecsToSort = [...sortedTechSpecs];

    sortTechSpecs(techSpecsToSort, header, sortOrder);

    setSortedTechSpecs(techSpecsToSort);
  };

  return (
    <table>
      <caption>My personal Phone</caption>
      <TableHead
        colHeaders={tableHeaders}
        InitialSortingOrder="asc"
        onClick={handleColHeaderClick}
      />
      {sortedTechSpecs && <TableBody techSpecs={sortedTechSpecs} />}
    </table>
  );
}

export default CustomTable;
