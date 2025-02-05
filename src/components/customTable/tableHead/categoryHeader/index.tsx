import { useCategoryStore } from "@/stores/categoryStore";
import { categories, Category, Option } from "@/types";
import { useState } from "react";
import Select, { StylesConfig } from "react-select";

const options: Option[] = categories.map((category) => ({
  label: category,
  value: category,
}));

const customStyles: StylesConfig<Option, false> = {
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isSelected ? "#414868" : "#c0caf5",
    backgroundColor: state.isSelected ? "#9ece6a" : "#414868",
    "&:hover": {
      backgroundColor: "#c0caf5",
      color: "#1a1b26",
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#414868",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#414868",
    borderColor: "#c0caf5",
    boxShadow: state.isFocused ? "0 0 4px #9ece6a" : "none",
    "&:hover": {
      borderColor: "#9ece6a",
    },
  }),
  container: (baseStyles) => ({
    ...baseStyles,
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: "#c0caf5",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#c0caf570",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "a9b1d6",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#c0caf5",
    "&:hover": {
      color: "#9ece6a",
    },
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#c0caf5",
    "&:hover": {
      color: "#f7768e",
    },
  }),
  noOptionsMessage: (baseStyles) => ({
    ...baseStyles,
    color: "c0caf5",
  }),
};

function CategoryHeader() {
  const setCategory = useCategoryStore((state) => state.updateCategory);
  const resetCategory = useCategoryStore((state) => state.resetCategory);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (selectedOption: Option | null) => {
    if (!selectedOption) {
      resetCategory();
      setSelectedOption(null);
      return;
    }

    setCategory(selectedOption.label as Category);
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      className="w-[150px] md:w-[200px]"
      styles={customStyles}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      placeholder="category"
      isClearable
    />
  );
}

export default CategoryHeader;
