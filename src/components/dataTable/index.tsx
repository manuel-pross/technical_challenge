import useTechSpecs from "@/hooks/useTechSpecs";

function DataTable() {
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

  return <pre>{JSON.stringify(techSpecs)}</pre>;
}

export default DataTable;
