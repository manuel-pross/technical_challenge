import { categories, Option } from "@/types";
import { useState } from "react";
import Select from "react-select";

const options: Option[] = categories.map((category) => ({
  label: category,
  value: category,
}));

function CategoryHeader() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (selectedOption: Option | null) => {
    if (!selectedOption) return;

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
