import { TechSpec } from "@/types";

export function sortTechSpecs(
  techSpecs: TechSpec[],
  rowHeader: string,
  sortingOrder: "asc" | "desc" | "",
): void {
  if (sortingOrder === "") return;

  techSpecs.sort((a, b) => {
    const valueA = a[rowHeader as keyof TechSpec];
    const valueB = b[rowHeader as keyof TechSpec];

    if (sortingOrder === "asc") {
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    } else {
      if (valueA < valueB) return 1;
      if (valueA > valueB) return -1;
      return 0;
    }
  });
}
