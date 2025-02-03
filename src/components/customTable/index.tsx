import TableBody from "@/components/customTable/tableBody";
import TableHead from "@/components/customTable/tableHead";
import useTechSpecs from "@/hooks/useTechSpecs";
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

  useEffect(() => {
    setSortedTechSpecs(techSpecs);
  }, [status, techSpecs, error]);

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
      <TableHead colHeaders={tableHeaders} onClick={handleColHeaderClick} />
      {sortedTechSpecs ? (
        <TableBody techSpecs={sortedTechSpecs} />
      ) : (
        <TableBody techSpecs={techSpecs} />
      )}
    </table>
  );
}

export default CustomTable;
