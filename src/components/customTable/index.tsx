import TableBody from "@/components/customTable/tableBody";
import TableHead from "@/components/customTable/tableHead";
import useTechSpecs from "@/hooks/useTechSpecs";
import { useCategoryStore } from "@/stores/categoryStore";
import { useSearchTermStore } from "@/stores/searchTermStore";
import { useSortOrderStore } from "@/stores/sortOrderStore";
import { colHeaders, TechSpec } from "@/types";
import { sortTechSpecs } from "@/utils";
import { useCallback, useEffect, useState } from "react";

function CustomTable() {
  const { status, data: techSpecs, error } = useTechSpecs();

  const selectedCategory = useCategoryStore((state) => state.category);
  const { searchTerm } = useSearchTermStore((state) => state);
  const { sortCriteria } = useSortOrderStore((state) => state);

  const [sortedTechSpecs, setSortedTechSpecs] = useState(techSpecs);

  const filterByCategory = useCallback(
    (techSpecs: TechSpec[]) => {
      if (!selectedCategory) return techSpecs;
      return techSpecs.filter(
        (techSpec) => techSpec.category === selectedCategory,
      );
    },
    [selectedCategory],
  );

  const filterBySearchTerm = useCallback(
    (techSpecs: TechSpec[]) => {
      if (!searchTerm) return techSpecs;
      return techSpecs.filter((techSpec) =>
        techSpec.label.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    },
    [searchTerm],
  );

  useEffect(() => {
    if (!techSpecs) return;

    if (!selectedCategory) {
      setSortedTechSpecs(techSpecs);
      return;
    }
    if (selectedCategory) {
      const techSpecsToFilter = filterByCategory(techSpecs);
      setSortedTechSpecs(techSpecsToFilter);
    }
  }, [selectedCategory, techSpecs, filterByCategory]);

  useEffect(() => {
    if (!techSpecs) return;

    if (!searchTerm) {
      setSortedTechSpecs(techSpecs);
      return;
    }

    const techSpecsToFilter = filterBySearchTerm(techSpecs);

    setSortedTechSpecs(techSpecsToFilter);
  }, [searchTerm, techSpecs, filterBySearchTerm]);

  useEffect(() => {
    if (!sortCriteria.colHeader || !sortedTechSpecs) {
      return;
    }

    const newSortedTechSpecs = [...sortedTechSpecs];
    sortTechSpecs(
      newSortedTechSpecs,
      sortCriteria.colHeader,
      sortCriteria.sortOrder,
    );

    setSortedTechSpecs(newSortedTechSpecs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortCriteria]);

  const renderStatus = () => {
    if (status === "loading") return <p>loading...</p>;
    if (status === "error" || error) return <p>An error occurred</p>;
    return null;
  };

  return (
    <>
      {renderStatus() || (
        <table className="bg-tokyo-storm border-collapse w-full md:w-[750px] lg:w-[900px] xl:w-[1200px]">
          <caption className="pl-4 pb-3 text-tokyo-white text-left">
            My personal Phone
          </caption>
          <TableHead colHeaders={colHeaders} />
          {sortedTechSpecs && <TableBody techSpecs={sortedTechSpecs} />}
        </table>
      )}
    </>
  );
}

export default CustomTable;
