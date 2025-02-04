import { useCategoryStore } from "@/stores/categoryStore";
import { categories, Category, Option } from "@/types";
import { useState } from "react";
import Select from "react-select";

const options: Option[] = categories.map((category) => ({
  label: category,
  value: category,
}));

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
      options={options}
      value={selectedOption}
      onChange={handleChange}
      placeholder="category"
      isClearable
    />
  );
}

export default CategoryHeader;
