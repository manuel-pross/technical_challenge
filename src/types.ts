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

export type Category = (typeof categories)[number];

export type SelectOption = {
  label: string;
  value: string;
};

export const selectOptions: SelectOption[] = categories.map((category) => ({
  label: category,
  value: category,
}));

//export type Category =
//  | "Dimensions"
//  | "Physical Attributes"
//  | "Appearance"
//  | "Composition"
//  | "Power"
//  | "Display"
//  | "Hardware"
//  | "Memory"
//  | "Software"
//  | "Camera"
//  | "Connectivity"
//  | "Features"
//  | "Durability"
//  | "Audio";

export type TechSpec = {
  id: number;
  label: string;
  category: Category;
  note: string;
  user_value: string;
  system_value: string;
  name: string;
};
