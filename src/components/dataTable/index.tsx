import { TechSpec } from "@/types";
import { useQuery } from "@tanstack/react-query";

function DataTable() {
  const {
    data: techSpecs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["techSpecs"],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const res = await fetch("./src/assets/data.json");

      const techSpecs = (await res.json()) as TechSpec[];
      console.log(techSpecs);
      return techSpecs;
    },
  });

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
