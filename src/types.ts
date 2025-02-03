export type Category =
  | "Dimensions"
  | "Physical Attributes"
  | "Appearance"
  | "Composition"
  | "Power"
  | "Display"
  | "Hardware"
  | "Memory"
  | "Software"
  | "Camera"
  | "Connectivity"
  | "Features"
  | "Durability"
  | "Audio";

export type TechSpec = {
  id: number;
  label: string;
  category: Category;
  note: string;
  user_value: string;
  system_value: string;
  name: string;
};
