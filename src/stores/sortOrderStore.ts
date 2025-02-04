import { ColHeader, SortOrder } from "@/types";
import { create } from "zustand";

type SortCriteria = {
  sortOrder: SortOrder;
  colHeader: ColHeader | undefined;
};

type SortOrderStore = {
  sortCriteria: SortCriteria;
  updateSortOrder: (newSortCriteria: SortCriteria) => void;
};

export const useSortOrderStore = create<SortOrderStore>()((set) => ({
  sortCriteria: { sortOrder: "asc", colHeader: undefined },
  updateSortOrder: (newSortCriteria: SortCriteria) =>
    set(() => ({ sortCriteria: newSortCriteria })),
}));
