import { TechSpec } from "@/types";
import { useQuery } from "@tanstack/react-query";

function useTechSpecs() {
  return useQuery({
    queryKey: ["techSpecs"],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const res = await fetch("./src/assets/data.json");

      const techSpecs = (await res.json()) as TechSpec[];
      console.log(techSpecs);
      return techSpecs;
    },
  });
}

export default useTechSpecs;
