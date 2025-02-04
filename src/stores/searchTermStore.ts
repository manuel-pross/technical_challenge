import { create } from "zustand";

type SearchTermStore = {
  searchTerm: string;
  resetSearchTerm: () => void;
  updateSearchTerm: (newSearchTerm: string) => void;
};

export const useSearchTermStore = create<SearchTermStore>()((set) => ({
  searchTerm: "",
  resetSearchTerm: () => set(() => ({ searchTerm: null })),
  updateSearchTerm: (newSearchTerm: string) =>
    set(() => ({ searchTerm: newSearchTerm })),
}));
