import { Category } from "@/types";
import { create } from "zustand";

type CategoryState = {
  category: string | undefined;
  resetCategory: () => void;
  updateCategory: (newCategory: Category) => void;
};

export const useCategoryStore = create<CategoryState>()((set) => ({
  category: undefined,
  resetCategory: () => set(() => ({ category: undefined })),
  updateCategory: (newCategory: Category) =>
    set(() => ({ category: newCategory })),
}));
