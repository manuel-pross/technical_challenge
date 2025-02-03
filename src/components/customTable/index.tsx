import TableBody from "@/components/customTable/tableBody";
import TableHead from "@/components/customTable/tableHead";
import useTechSpecs from "@/hooks/useTechSpecs";

function CustomTable() {
  const { data: techSpecs, isLoading, error } = useTechSpecs();

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!techSpecs) {
    return <p>sth went wrong...</p>;
  }

  if (error) {
    return <p>an error occurred</p>;
  }

  return (
    <table>
      <caption> My personal Phone</caption>
      <TableHead
        colHeaders={Object.keys(techSpecs[0]).filter(
          (key) => key !== "name" && key !== "id",
        )}
      />
      <TableBody techSpecs={techSpecs} />
    </table>
  );
}

export default CustomTable;
