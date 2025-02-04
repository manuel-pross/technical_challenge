export const categories = [
  "Dimensions",
  "Physical Attributes",
  "Appearance",
  "Composition",
  "Power",
  "Display",
  "Hardware",
  "Memory",
  "Software",
  "Camera",
  "Connectivity",
  "Features",
  "Durability",
  "Audio",
] as const;

export const colHeaders = [
  "label",
  "category",
  "system_value",
  "user_value",
  "note",
] as const;

export type Category = (typeof categories)[number];
export type ColHeader = (typeof colHeaders)[number];

export type SortOrder = "asc" | "desc";

export type Option = {
  label: string;
  value: string;
};

export type TechSpec = {
  id: number;
  label: string;
  category: Category;
  note: string;
  user_value: string;
  system_value: string;
  name: string;
};
