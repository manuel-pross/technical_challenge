import { create } from "zustand";

type SearchTermStore = {
  searchTerm: string | null;
  resetSearchTerm: () => void;
  updateSearchTerm: (newSearchTerm: string) => void;
};

export const useSearchTermStore = create<SearchTermStore>()((set) => ({
  searchTerm: null,
  resetSearchTerm: () => set(() => ({ searchTerm: null })),
  updateSearchTerm: (newSearchTerm: string) =>
    set(() => ({ searchTerm: newSearchTerm })),
}));
